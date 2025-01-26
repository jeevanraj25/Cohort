"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailLogin = async () => {
        const res = await signIn("credentials", {
            username: email,
            password,
            redirect: false,
        });

        if (res?.ok) {
            router.push("/");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    Sign In
                </h1>
                <div className="mt-4">
                    <button
                        onClick={() => signIn("google")}
                        className="w-full px-4 py-2 mb-4 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                        Sign in with Google
                    </button>
                    <button
                        onClick={() => signIn("github")}
                        className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded hover:bg-gray-900"
                    >
                        Sign in with GitHub
                    </button>
                    <div className="mt-4">
                        <h2 className="mb-2 text-gray-600">Or use your email</h2>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleEmailLogin}
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Sign in with Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
