"use client";

import { useState } from "react";

type Build = {
    processor: string | null;
    motherboard: string | null;
    ram: string | null;
    gpu: string | null;
    storage: string | null;
    powerSupply: string | null;
    case: string | null;
};

const BuildPage = () => {
    const [build, setBuild] = useState<Build>({
        processor: null,
        motherboard: null,
        ram: null,
        gpu: null,
        storage: null,
        powerSupply: null,
        case: null,
    });

    const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null);
    return (
        <div className="flex flex-col h-full justify-center items-center p-4 bg-black text-white">
            <h1 className="text-white ">Choose your Processor</h1>
            <div className="flex flex-col justify-between items-center p-1.5 text-gray-400">
                <ul className="flex space-x-4">
                    <li className="hover:text-white cursor-pointer" onClick={() => setSelectedProcessor("intel")}>Intel</li>
                    <li className="hover:text-white cursor-pointer" onClick={() => setSelectedProcessor("amd")}>Amd</li>
                </ul>
                {
                    selectedProcessor === "intel" && (
                        <div className="flex flex-col space-y-4">
                            <ul className="flex space-x-4">
                                <li className="hover:text-white cursor-pointer" onClick={() => setBuild({ ...build, processor: "Core Ultra 7" })}>Core Ultra 7 - $269.00</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => setBuild({ ...build, processor: "Core Ultra 9" })}>Core Ultra 9 - $588.99</li>
                            </ul>
                        </div>
                    )
                }
                {
                    selectedProcessor === "amd" && (
                        <div className="flex flex-col space-y-4">
                            <ul className="flex space-x-4">
                                <li className="hover:text-white cursor-pointer" onClick={() => setBuild({ ...build, processor: "Ryzen 7 9700X" })}>Ryzen 7 9700X - $309.00</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => setBuild({ ...build, processor: "Ryzen 9 9950X" })}>Ryzen 9 9950X - $522.30</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default BuildPage;