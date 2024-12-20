import { LoginButton } from "@/components/ui/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold mb-4">Auth</h1>
    <p className="text-lg mb-6">Auth Simple</p>
   <LoginButton>
   <Button variant="secondary">Sigin</Button>
   </LoginButton>
   
  </main>
  
  );
}
