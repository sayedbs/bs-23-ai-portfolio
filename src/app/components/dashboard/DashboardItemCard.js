import React, { useEffect } from "react";
import { GlareCard } from "../GlareCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

function DashboardItemCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="transform transition-transform hover:scale-105 hover:shadow-lg bg-black bg-opacity-30 border-2 border-gray-800 hover:bg-white hover:text-gray-900 text-gray-300 hover:shadow-indigo-500/50 rounded-lg overflow-hidden backdrop-blur-3xl">
                <CardHeader className="p-3 bg-gray-900 h-[200px]">
                    <Image
                        src="/images/upe-nd-now.png"
                        width={100}
                        height={50}
                        alt="Thumbnail"
                        className=" m-auto rounded-lg"
                    />
                </CardHeader>
                <CardContent className="px-6 py-0 pt-5 text-sm">
                    <h2 className="text-3xl font-bold mb-3 ">
                        UPENDNOW
                    </h2>

                    <p>Upendnow is a powerful platform designed as a co-pilot for content creators. It automates the entire video production process, allowing creators...

                    
                    </p>
                </CardContent>
                <CardFooter className="p-6 flex justify-between items-center">
                    <Button className="bg-indigo-500 text-white max-w-[150px] ml-auto hover:bg-indigo-600 p-4 rounded-full flex items-center justify-center">
                        View Details <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /> </svg>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default DashboardItemCard;
