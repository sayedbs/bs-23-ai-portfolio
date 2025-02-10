import React, { use, useEffect, useState } from "react";
import Header from "./Header";
import DashboardItemCard from "./dashboard/DashboardItemCard";

const ComputerVisionComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => {
                const filteredProjects = data.filter(
                    (project) => project.type === "Computer Vision"
                );
                setProjects(filteredProjects);
            });
    }, []);

    return (
        <div
            className="p-3  min-h-[100vh]"
            style={{
                backgroundImage: "url('/images/computervision.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1500px] mx-auto">
                <div className="mt-[150px]">
                    <Header />

                    <div className="grid grid-cols-3 lg:grid-cols-4  gap-5">
                        {projects.map((project) => (
                            <DashboardItemCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerVisionComponent;
