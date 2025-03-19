import { db } from "@/server/db";

export const POST = async (req: Request) => {
    const { data } = await req.json();

    const email = data.email_addresses[0].email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const  imageUrl = data.profile_image_url;
    const id = data.id;

    await db.user.create({
        data: {
            email,
            firstName,
            lastName,
            imageUrl,
            id
        }
    })

    console.log('User Created', data);

    return new Response('webhook received', { status: 200 });
}