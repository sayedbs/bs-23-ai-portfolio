"use client";
import React, { useEffect, useState } from "react";
import DashboardItemCard from "../components/dashboard/DashboardItemCard";
import OnePager from "../components/onepager/OnePager";
import MainWrapper from "../components/MainWrapper";

const AEM = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("aem.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    return (
        <MainWrapper
            style={{
                backgroundImage: "url('/images/aem.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1500px] mx-auto p-4 relative">
                <div className="grid grid-cols-3 lg:grid-cols-4  gap-5">
                    {projects?.map((project) => (
                        <DashboardItemCard
                            key={project.id}
                            project={project}
                            aem={true}
                        />
                    ))}
                </div>
                <OnePager />
            </div>
        </MainWrapper>
    );
};

export default AEM;
