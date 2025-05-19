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
            <div className="
                current-build 
                w-full 
                flex 
                flex-wrap
                justify-evenly 
                items-center 
                p-1.5 
                text-gray-400 
                sticky 
                top-15 
                z-50
                bg-gray-900">
                <div className="flex space-x-4">
                    <p>Processor: <span className="text-white">{processor}</span> </p>
                </div>
                <div className="flex space-x-4">
                    <p>Motherboard: <span className="text-white">{motherboard}</span></p>
                </div>
                <div className="flex space-x-4">
                    <p>RAM: <span className="text-white">{ram}</span></p>
                </div>
                <div className="flex space-x-4">
                    <p>GPU: <span className="text-white">{gpu}</span></p>
                </div>
                <div className="flex space-x-4">
                    <p>Storage: <span className="text-white">{storage}</span></p>
                </div>
                <div className="flex space-x-4">
                    <p>Power Supply: <span className="text-white">{powerSupply}</span></p>
                </div>
                <div className="flex space-x-4">
                    <p>Case: <span className="text-white">{caseType}</span></p>
                </div>
            </div>
            {children}
        </main>
    );
}
export default BuildLayout;