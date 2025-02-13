import React, { useEffect, useState } from "react";
import DashboardItemCard from "../components/dashboard/DashboardItemCard";
import OnePager from "../components/onepager/OnePager";
import MainWrapper from "./MainWrapper";

const ArtificialIntelligenceComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => {
                const filteredProjects = data.filter(
                    (project) => project.type === "Artificial Intelligence"
                );
                setProjects(filteredProjects);
            });
    }, []);

    return (
        <MainWrapper
            style={{
                backgroundImage: "url('/images/ai-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1500px] mx-auto p-4 relative">
                <div className="grid grid-cols-3 lg:grid-cols-4  gap-5">
                    {projects.map((project) => (
                        <DashboardItemCard key={project.id} project={project} />
                    ))}
                </div>
                <OnePager />
            </div>
        </MainWrapper>
    );
};

export default ArtificialIntelligenceComponent;
