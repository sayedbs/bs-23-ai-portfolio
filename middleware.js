import { NextResponse } from "next/server";

export function middleware(req) {
    const token =
        req.cookies.get("token")?.value || localStorage.getItem("token");
    const { pathname } = req.nextUrl;

    // Redirect unauthenticated users to login if they try to access dashboard
    if (!token && pathname === "/") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Redirect authenticated users away from login page
    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/login"], // Apply middleware to both dashboard and login
};
