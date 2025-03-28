'use client';

import { getAurinkoAuthUrl } from "@/lib/aurinko";
import { Button } from "./ui/button";

const LinkAccountButton = () => {
    return (
        <Button
            onClick={async () => {
                const authUrl = await getAurinkoAuthUrl('Google');
                console.log(authUrl)
                window.location.href = authUrl
            }}
            >
            Link Account
        </Button>
    );
}
 
export default LinkAccountButton;