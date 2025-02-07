"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TabsDemo } from "./Menu";
import Image from "next/image";
import Dashboard2 from "./Dashboard2";

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
        <div className="p-3 min-h-[100vh]" style={{ backgroundImage: "url('/images/ai-1.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        
            <div className="max-w-[1500px] mx-auto">
                {/* <TabsDemo /> */}

                <Dashboard2 />
            </div>
           
        </div>
    );
}
