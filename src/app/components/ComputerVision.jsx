import React, { use, useEffect, useState } from "react";
import DashboardItemCard from "./dashboard/DashboardItemCard";
import OnePager from "./onepager/OnePager";
import MainWrapper from "./MainWrapper";

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
        <MainWrapper
            style={{
                backgroundImage: "url('/images/computervision.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="max-w-[1500px] mx-auto p-4 relative">
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
                    {projects.map((project) => (
                        <>
                            <DashboardItemCard
                                key={project.id}
                                project={project}
                            />
                        </>
                    ))}
                </div>
                <OnePager />
            </main>
        </MainWrapper>
    );
};

export default ComputerVisionComponent;
