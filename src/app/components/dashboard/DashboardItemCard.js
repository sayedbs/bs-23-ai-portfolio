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
            <Card className="transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50 rounded-lg overflow-hidden">
                <CardHeader>
                    <Image
                        src="/images/ai-1.jpg"
                        width={300}
                        height={250}
                        alt="Thumbnail"
                        className="w-full h-auto"
                    />
                    <div></div>
                </CardHeader>
                <CardContent className="px-6 py-0">
                    <h2 className="text-2xl font-bold mb-3">Card Title</h2>
                    <p className="text-gray-700">Card Content</p>
                </CardContent>
                <CardFooter className="px-6 py-10 flex justify-between items-center">
                    <Button className="bg-indigo-500 text-white hover:bg-indigo-600 px-10">
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default DashboardItemCard;
