"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import DashboardItemCard from "../components/dashboard/DashboardItemCard";
import OnePager from "../components/onepager/OnePager";
import Footer from "../components/Footer";

const Chatbot = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => {
                const filteredProjects = data.filter(
                    (project) => project.type === "Chatbot"
                );
                setProjects(filteredProjects);
            });
    }, []);

    return (
        <div
            className="min-h-[100vh]"
            style={{
                backgroundImage: "url('/images/chatbot-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div>
                <div className="">
                    <Header />
                    <div className="max-w-[1500px] mx-auto p-4 relative">
                        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
                            {projects.map((project) => (
                                <DashboardItemCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                        <OnePager />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
