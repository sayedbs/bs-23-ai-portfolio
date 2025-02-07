import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';

function Header() {

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };
  return (
    <header className="absolute top-0 right-0 left-0 z-50 p-3 flex justify-between items-center"> 
            <Image className="" src={"/images/bs23.png"} alt="ai" width="100" height="100" />

            <div className="flex-1 flex items-center gap-4 justify-center"> 
                <button
                    className="relative px-4 py-2 rounded-full"
                    style={{transformStyle:"preserve-3d"}}
                >
                    <span className="relative block text-white   dark:text-white">
                        Computer Vision
                    </span>
                </button>
                <button
                    className="relative px-4 py-2 rounded-full"
                    style={{transformStyle:"preserve-3d"}}
                >
                    
                    <span className="relative block text-white text-[#12639e]  dark:text-white">
                        Artificial Intelligence
                    </span>
                </button>
                <button
                    className="relative px-4 py-2 rounded-full"
                    style={{transformStyle:"preserve-3d"}}
                >
                    <span className="relative block text-white   dark:text-white">
                        Chatbot
                    </span>
                </button>
            </div>

            <div>
                <button onClick={logout} className="bg-white bg-opacity-50 text-white rounded-lg flex align-center gap-2 hover:bg-opacity-100 hover:text-red-500">
                    <Image src={"/images/shotdown.webp"} alt="logout" width="20" height="20" />
                    Logout
                </button>
            </div>
            
        </header>
  )
}

export default Header