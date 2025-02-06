import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/app/config/authConfig";

export async function GET(req) {
    try {
        const token = req.headers.get("authorization")?.split(" ")[1];

        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        jwt.verify(token, JWT_SECRET);

        return NextResponse.json(
            { message: "Protected data accessed" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }
}
