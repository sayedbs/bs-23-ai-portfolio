import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import {
    AUTH_PASSWORD,
    JWT_SECRET,
    TOKEN_EXPIRATION,
} from "@/app/config/authConfig";

export async function POST(req) {
    try {
        const { password } = await req.json();

        if (!password) {
            return NextResponse.json(
                { error: "Password is required" },
                { status: 400 }
            );
        }

        if (password !== AUTH_PASSWORD) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 401 }
            );
        }

        // Generate a JWT token
        const token = jwt.sign({ user: "authenticated" }, JWT_SECRET, {
            expiresIn: TOKEN_EXPIRATION,
        });

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
