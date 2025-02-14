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
        <div className="">
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="onepager-btn hover:scale-105 fixed right-5 bottom-5 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg bg-opacity-75 hover:bg-opacity-100"
            >
                <BookText className="relative z-20" />
            </button>

            <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default OnePager;
