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
        <main className="flex flex-col h-full p-4 bg-black text-white min-h-screen relative">
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
                top-20 
                z-50
                bg-white/[.25]
                rounded-lg">
                <div className="flex space-x-4">
                    <p>Processor: {processor}</p>
                </div>
                <div className="flex space-x-4">
                    <p>Motherboard: </p>
                </div>
                <div className="flex space-x-4">
                    <p>RAM: </p>
                </div>
                <div className="flex space-x-4">
                    <p>GPU: </p>
                </div>
                <div className="flex space-x-4">
                    <p>Storage: </p>
                </div>
                <div className="flex space-x-4">
                    <p>Power Supply: </p>
                </div>
                <div className="flex space-x-4">
                    <p>Case: </p>
                </div>
            </div>
            {children}
        </main>
    );
}
export default BuildLayout;