import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookText } from "lucide-react";
import ImageModal from "../dashboard/ImageModal";

const OnePager = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        // Start animation after 1 minute (60,000 ms)
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 10000);

        // Set interval to toggle animation every 30 seconds
        const interval = setInterval(() => {
            setStartAnimation((prev) => !prev);
        }, 30000); // Toggle every 30 seconds

        // Cleanup timers when component unmounts
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed right-5 bottom-5 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg opacity-75 hover:opacity-100"
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                <BookText />
                {startAnimation && (
                    <motion.div
                        className="absolute w-full h-full bg-blue-500 opacity-30 rounded-full"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.8, opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                )}
            </motion.button>
            <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default OnePager;
