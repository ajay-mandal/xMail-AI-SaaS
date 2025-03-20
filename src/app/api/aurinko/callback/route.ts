import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    const { userId } = await auth();
    return NextResponse.json({ message: 'Hello from Aurinko' });
}