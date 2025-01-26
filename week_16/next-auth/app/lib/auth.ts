import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials: any) {
                console.log(credentials);
                return {
                    id:"1",
                    name: credentials.username,
                    email:credentials.username,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: async ({ session, token }: any) => {
            if (session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },

        jwt: ({token,user} :any) =>{
            console.log(token);

            return token;
        }
    },
    pages: {
        signIn: "/signin",
    },
};
