import { NextResponse } from "next/server";

import { PrismaClient } from '@prisma/client'

let client = new PrismaClient()
export async function GET() {
    const user = await client.user.findFirst({});
    return NextResponse.json({ name: user?.username, email: user?.username })
  }


  export async function POST(req:NextResponse) {

    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
  }