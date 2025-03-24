"use server";

import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Office365') => {
    const { userId } = await auth();

    if(!userId) {
        throw new Error('User is not authenticated');
    }

    const params = new URLSearchParams({
        clientId: process.env.AURINKO_CLIENT_ID as string,
        serviceType,
        scopes: 'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All',
        responseType: 'code',
        returnUrl: `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`,
    })

    return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`;
}

export const exchangeCodeForAccessSession = async (code: string) => {
    try {

        const response = await axios.post(`https://api.aurinko.io/v1/account`,{}, {
            auth: {
                username: process.env.AURINKO_CLIENT_ID as string,
                password: process.env.AURINKO_CLIENT_SECRET as string,
            }
        })

        return response.data as {
            accountId: string;
            accessToken: string;
            userId: string;
            userSession: string;
        }
    }catch (error) {
        if(axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
        }
        console.error('other error:', error);
    }
}