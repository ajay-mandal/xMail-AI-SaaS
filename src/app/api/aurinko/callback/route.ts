import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForAccessSession } from "@/lib/aurinko";
export const GET = async (req: NextRequest) => {
    const { userId } = await auth();
    if(!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const params = req.nextUrl.searchParams;
    const status = params.get('status');
    const code = params.get('code');

    if(!status || !code) {
        return NextResponse.json({ error: 'Missing status or code' }, { status: 400 });
    }
    
    const token = await exchangeCodeForAccessSession(code);
    if(!token) return NextResponse.json({ error: 'Failed to exchange code for access session' }, { status: 500 });    
    
    return NextResponse.json({ message: 'Hello from Aurinko' });
}