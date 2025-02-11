"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ComputerVisionComponent from "./components/ComputerVision";

export default function Dashboard() {
    const [message, setMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        }

        fetch("/api/protected", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    localStorage.removeItem("token");
                    router.push("/login");
                } else {
                    setMessage(data.message);
                }
            });
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return (
        <>
            <ComputerVisionComponent />
        </>
    );
}
