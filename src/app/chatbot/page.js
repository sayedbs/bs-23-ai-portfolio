"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import DashboardItemCard from "../components/dashboard/DashboardItemCard";

const ComputerVision = () => {
    return (
        <div
            className="p-3 min-h-[100vh]"
            style={{
                backgroundImage: "url('/images/chatbot-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1500px] mx-auto">
                <div className="mt-[150px]">
                    <Header />

                    <div className="grid grid-cols-4 gap-5">
                        <DashboardItemCard />
                        <DashboardItemCard />
                        <DashboardItemCard />
                        <DashboardItemCard />
                        <DashboardItemCard />
                        <DashboardItemCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerVision;
