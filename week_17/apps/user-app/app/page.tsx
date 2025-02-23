"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";

export default function Page(): JSX.Element {
  const session = useSession();

 console.log(session);
  if (!session) {
    return <div>Please log in</div>; // If no session, ask user to log in
  }
  return (
   <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <div>
      Welcome, {session.data?.user?.email} {/* Display session data */}
    </div>
   </div>
  );
}
