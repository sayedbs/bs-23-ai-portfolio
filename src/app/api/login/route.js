import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Optional, in case you want to hash passwords later
import jwt from "jsonwebtoken"; // For creating a token

// Example hardcoded email and password
const users = [
    {
        email: "user@example.com",
        password: "password123", // In a real app, this should be hashed
    },
    {
        email: "admin@brainstation-23.com",
        password: "BS@bd23",
    },
    {
        email: "bs@gmail.com",
        password: "12345",
    }
];

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Find user by email
        const user = users.find((user) => user.email === email);
        if (!user) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Validate password
        if (user.password !== password) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Create a JWT token
        const token = jwt.sign({ email: user.email }, "myjwtsecret", {
            expiresIn: "12h",
        });

        // Return the token
        return NextResponse.json({ token });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred" },
            { status: 500 }
        );
    }
}
