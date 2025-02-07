"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isAuthPage = pathname === "/login";

    useEffect(() => {
        const auth = localStorage.getItem("auth");

        if (!auth && !isAuthPage) {
            router.replace("/login");
        } else {
            setIsAuthChecked(true);
        }
    }, [pathname]);

    // Prevent rendering protected content until auth check is complete
    if (!isAuthChecked && !isAuthPage) return null;

    return children;
}
