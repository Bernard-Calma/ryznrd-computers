"use client";

import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Part = {
    part: string;
    value: string;
}

const BuildPage = () => {
    const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null);
    
    const {
        processor,
        motherboard,
        ram,
        gpu,
        storage,
        powerSupply,
        case: caseType,
    } = useSelector((state: RootState) => state.build);

    const dispatch = useDispatch();
    const handleSetPart = (part: Part) => {
        dispatch({
            type: "build/setPart",
            payload: part
        })
    }
    

    
    return (
        <div className="flex flex-col my-4 h-full justify-center items-center p-4 bg-black text-white">
            <h1 className="text-white ">Choose your Processor</h1>
            <div className="flex flex-col justify-between items-center p-1.5 text-gray-400">
                <ul className="flex space-x-4">
                    <li className={`hover:text-white cursor-pointer ${selectedProcessor === "intel" ? "text-white" : ""}`} onClick={() => setSelectedProcessor("intel")}>Intel</li>
                    <li className={`hover:text-white cursor-pointer ${selectedProcessor === "amd" ? "text-white" : ""}`} onClick={() => setSelectedProcessor("amd")}>Amd</li>
                </ul>
                {
                    selectedProcessor === "intel" && (
                        <div className="flex flex-col space-y-4 mb-4">
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${processor === "Core Ultra 7" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "processor", value: "Core Ultra 7"})}>Core Ultra 7 - $269.00</li>
                                <li className={`hover:text-white cursor-pointer ${processor === "Core Ultra 9" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "processor", value: "Core Ultra 9"})}>Core Ultra 9 - $588.99</li>
                            </ul>
                        </div>
                    )
                }
                {
                    selectedProcessor === "amd" && (
                        <div className="flex flex-col space-y-4 mb-4">
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${processor === "Ryzen 7 9700X" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "processor", value: "Ryzen 7 9700X"})}>Ryzen 7 9700X - $309.00</li>
                                <li className={`hover:text-white cursor-pointer ${processor === "Ryzen 9 9950X" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "processor", value: "Ryzen 9 9950X"})}>Ryzen 9 9950X - $522.30</li>
                            </ul>
                        </div>
                    )
                }
                {
                    processor && (
                        <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
                            <h1 className="text-white ">Choose your Motherboard</h1>
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${motherboard === "Asus ROG Strix Z790-E" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "motherboard", value: "Asus ROG Strix Z790-E"})}>Asus ROG Strix Z790-E - $299.00</li>
                                <li className={`hover:text-white cursor-pointer ${motherboard === "MSI MPG B550 Gaming Edge WiFi" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "motherboard", value: "MSI MPG B550 Gaming Edge WiFi"})}>MSI MPG B550 Gaming Edge WiFi - $199.00</li>
                            </ul>
                        </div>
                    )
                }
                {
                    motherboard && (
                        <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
                            <h1 className="text-white ">Choose your RAM</h1>
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${ram === "Corsair Vengeance LPX 16GB" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "ram", value: "Corsair Vengeance LPX 16GB"})}>Corsair Vengeance LPX 16GB - $69.99</li>
                                <li className={`hover:text-white cursor-pointer ${ram === "G.Skill Ripjaws V 32GB" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "ram", value: "G.Skill Ripjaws V 32GB"})}>G.Skill Ripjaws V 32GB - $129.99</li>
                            </ul>
                        </div>
                    )
                }
                {
                    ram && (
                        <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
                            <h1 className="text-white ">Choose your GPU</h1>
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${gpu === "NVIDIA GeForce RTX 3060" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "gpu", value: "NVIDIA GeForce RTX 3060"})}>NVIDIA GeForce RTX 3060 - $329.00</li>
                                <li className={`hover:text-white cursor-pointer ${gpu === "AMD Radeon RX 6700 XT" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "gpu", value: "AMD Radeon RX 6700 XT"})}>AMD Radeon RX 6700 XT - $479.00</li>
                            </ul>
                        </div>
                    )
                }
                {
                    gpu && (
                        <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
                            <h1 className="text-white ">Choose your Storage</h1>
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${storage === "Samsung 970 EVO Plus 1TB" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "storage", value: "Samsung 970 EVO Plus 1TB"})}>Samsung 970 EVO Plus 1TB - $129.99</li>
                                <li className={`hover:text-white cursor-pointer ${storage === "Western Digital Blue SN550 2TB" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "storage", value: "Western Digital Blue SN550 2TB"})}>Western Digital Blue SN550 2TB - $199.99</li>
                            </ul>
                        </div>
                    )
                }
                {
                    storage && (
                        <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
                            <h1 className="text-white ">Choose your Power Supply</h1>
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${powerSupply === "Corsair RM750x" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "powerSupply", value: "Corsair RM750x"})}>Corsair RM750x - $129.99</li>
                                <li className={`hover:text-white cursor-pointer ${powerSupply === "EVGA SuperNOVA 850 G5" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "powerSupply", value: "EVGA SuperNOVA 850 G5"})}>EVGA SuperNOVA 850 G5 - $159.99</li>
                            </ul>
                        </div>
                    )
                }
                {
                    powerSupply && (
                        <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
                            <h1 className="text-white ">Choose your Case</h1>
                            <ul className="flex space-x-4">
                                <li className={`hover:text-white cursor-pointer ${caseType === "NZXT H510" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "case", value: "NZXT H510"})}>NZXT H510 - $69.99</li>
                                <li className={`hover:text-white cursor-pointer ${caseType === "Fractal Design Meshify C" ? "text-white" : ""}`} onClick={() => handleSetPart({part: "case", value: "Fractal Design Meshify C"})}>Fractal Design Meshify C - $89.99</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default BuildPage;