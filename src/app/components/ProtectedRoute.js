"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const isAuthPage = pathname === "/login";

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (!auth && !isAuthPage) {
            router.push("/login");
        }
    }, [pathname]);

    return children;
}
