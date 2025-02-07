"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TabsDemo } from "./Menu";
import Image from "next/image";

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
            <Image className="absolute left-5 top-5" src={"/images/bs23.png"} alt="ai" width="100" height="100" />

            <button onClick={logout} className="absolute top-0 right-0 m-3 p-2 bg-white bg-opacity-50 text-white rounded-lg flex align-center gap-2 hover:bg-opacity-100 hover:text-red-500">
                <Image src={"/images/shotdown.webp"} alt="logout" width="20" height="20" />
                Logout
            </button>

            <div className="max-w-[1500px] mx-auto">
                <TabsDemo />
            </div>
           
        </div>
    );
}
