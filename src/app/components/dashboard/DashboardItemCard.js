import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaVideo } from "react-icons/fa";
import "./DashboardItemCard.css";
import { Button } from "../../../../@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import ProjectModal from "./ProjectModal";

function DashboardItemCard({ project }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card
                onClick={() => setIsOpen(true)}
                className="transform hover:shadow-2xl bg-black bg-opacity-30 border-2 border-gray-800 hover:bg-gray-300 hover:text-gray-900 text-gray-300 hover:shadow-indigo-500/50 rounded-lg overflow-hidden backdrop-blur-3xl group transition-colors duration-300 hover:border-[#6366f1]"
            >
                <CardHeader className="relative p-3 bg-gray-900 h-[200px] flex items-center justify-center">
                    <Image
                        src={
                            project.thumbnail
                                ? project.thumbnail
                                : "/images/placeholder.png"
                        }
                        width={200}
                        height={100}
                        alt="Thumbnail"
                        className="rounded-lg p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    { project?.youtube &&<span className="absolute right-2 bottom-1 z-50 group-hover:text-white text-3xl opacity-50"><FaVideo /></span> }
                </CardHeader>
                <CardContent className="px-3 lg:px-6 py-0 pt-5 text-sm ">
                    <h2 className="text-3xl font-bold mb-3 two-line-title-ellipsis">
                        {project.title}
                    </h2>

                    <p className="group-hover:translate-x-2 text-md transition-transform duration-300 three-line-ellipsis">
                        {project.description}
                    </p>
                </CardContent>
                <CardFooter className="p-3 lg:p-6 flex justify-between items-center">
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="bg-indigo-500 text-white max-w-[180px] ml-auto hover:bg-gray-800 group-hover:bg-gray-800 p-4 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                        <span className="hover:translate-x-1 flex items-center transition-transform duration-300">
                            View Details
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </Button>
                </CardFooter>
            </Card>

            <ProjectModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                project={project}
            />
        </motion.div>
    );
}

export default DashboardItemCard;
