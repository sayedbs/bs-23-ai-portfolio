import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    console.log(pathname);

    const isActive = (path) => {
        if (path === "/computer-vision" && pathname === "/") {
            return true;
        }
        return pathname === path;
    };

    return (
        <header className="absolute top-0 right-0 left-0 z-50 p-3 flex justify-between items-center">
            <Image
                className=""
                src={"/images/bs23.png"}
                alt="ai"
                width="100"
                height="100"
            />

            <div className="flex-1 flex items-center gap-4 justify-center">
                <button
                    className={`relative px-4 py-2 rounded-full ${
                        isActive("/computer-vision") ? "bg-blue-500" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => router.push("/computer-vision")}
                >
                    <span className="relative block text-white dark:text-white">
                        Computer Vision
                    </span>
                </button>
                <button
                    className={`relative px-4 py-2 rounded-full ${
                        isActive("/artificial-intelligence")
                            ? "bg-blue-500"
                            : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => router.push("/artificial-intelligence")}
                >
                    <span className="relative block text-white dark:text-white">
                        Artificial Intelligence
                    </span>
                </button>
                <button
                    className={`relative px-4 py-2 rounded-full ${
                        isActive("/chatbot") ? "bg-blue-500" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => router.push("/chatbot")}
                >
                    <span className="relative block text-white dark:text-white">
                        Chatbot
                    </span>
                </button>
            </div>

            <div>
                <button
                    onClick={logout}
                    className="text-white flex align-center justify-center gap-2 hover:bg-opacity-100 hover:text-white border-2  border-transparent hover:border-gray-600 hover:hover:bg-primary/90 py-2 px-4 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right my-auto" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                          <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Header;
