import LinkAccountButton from "@/components/link-account-button";
import { auth } from "@clerk/nextjs/server";
import { SignOutButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();

  return (
    <>
    <h1 className="font-mono">Hello</h1>
    <LinkAccountButton />
    <p>{userId}</p>
    {/* <Button>
      <SignOutButton />
    </Button> */}
    </>
  );
}
