"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const BuildLayout = ({
    children,
} : Readonly<{children: React.ReactNode}>  ) => {

    const {
        processor,
        motherboard,
        ram,
        gpu,
        storage,
        powerSupply,
        case: caseType,
    } = useSelector((state: RootState) => state.build);

    return (
        <main className="flex flex-col h-full bg-black text-white min-h-screen relative">
            <div
                className="
                    current-build 
                    w-full 
                    flex 
                    flex-col md:flex-row
                    justify-center 
                    gap-12 
                    p-4 
                    text-gray-400 
                    sticky 
                    top-22
                    z-50 
                    bg-gray-900 
                    border-b 
                    border-gray-800 
                    text-sm sm:text-base
                "
                >
                  <div className="flex flex-col md:flex-row gap-2 w-full justify-between max-w-4xl mx-auto">
                    {/* Left */}
                    <div className="flex flex-col gap-2">
                    <p>Processor: <span className="text-white">{processor}</span></p>
                    <p>Motherboard: <span className="text-white">{motherboard}</span></p>
                    <p>GPU: <span className="text-white">{gpu}</span></p>
                    <p>RAM: <span className="text-white">{ram}</span></p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-2">
                    <p>Storage: <span className="text-white">{storage}</span></p>
                    <p>Power Supply: <span className="text-white">{powerSupply}</span></p>
                    <p>Case: <span className="text-white">{caseType}</span></p>
                    </div>
                </div>
            </div>
            {children}
        </main>
    );
}
export default BuildLayout;