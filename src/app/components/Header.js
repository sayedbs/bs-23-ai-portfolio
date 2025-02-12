import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./header.css";
import ProjectModal from "./dashboard/ProjectModal";

function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    const isActive = (path) => {
        if (path === "/artificial-intelligence" && pathname === "/") {
            return true;
        }
        return pathname === path;
    };

    const NavButton = ({ path, label }) => (
        <button
            className={`relative px-3 lg:px-4 py-2 rounded-full transition duration-300 ${
                isActive(path) ? "bg-blue-500 bg-opacity-50" : "bg-opacity-20"
            } hover:bg-white hover:bg-opacity-30 active:bg-opacity-50`}
            style={{
                transformStyle: "preserve-3d",
                backdropFilter: "blur(10px)",
            }}
            onClick={() => router.push(path)}
        >
            <span className="relative block text-white dark:text-white">
                {label}
            </span>
        </button>
    );

    return (
        <header className="sticky top-0 right-0 left-0 z-50 p-3 flex justify-between items-center bg-opacity-90 backdrop-blur-lg">
            <Image
                className=""
                src={"/images/bs23.png"}
                alt="ai"
                width={window.innerWidth <= 991 ? 60 : 80}
                height={window.innerWidth <= 991 ? 60 : 100}
            />

            <div className="flex-1 flex items-center gap-4 justify-center">
                <NavButton
                    path="/artificial-intelligence"
                    label="Artificial Intelligence"
                />
                <NavButton path="/computer-vision" label="Computer Vision" />
                <NavButton path="/chatbot" label="Chatbot" />
                <NavButton path="/data-analysis" label="Data Analysis" />
            </div>

            <div>
                <button
                    onClick={logout}
                    className="text-white flex align-center justify-center gap-2 hover:bg-opacity-100 hover:text-white border-2 border-transparent hover:border-gray-600 hover:bg-primary/90 py-2 px-4 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right my-auto"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                        />
                    </svg>
                    <span className="hidden lg:inline">Logout</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
