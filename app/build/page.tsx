"use client";

import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PartSelector } from "./components";

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
                    selectedProcessor === "intel" && <PartSelector
                        partKey="processor"
                        title={selectedProcessor === "intel" ? "Choose your Intel Processor" : "Choose your AMD Processor"}
                        options={[
                        {
                            label: "Core Ultra 7 - $269.00",
                            value: "Core Ultra 7",
                        },
                        {
                            label: "Core Ultra 9 - $588.99",
                            value: "Core Ultra 9",
                        },
                        ]}
                    />
                }
                {
                    selectedProcessor === "amd" && <PartSelector
                        partKey="processor"
                        title={selectedProcessor === "amd" ? "Choose your AMD Processor" : "Choose your Intel Processor"}
                        options={[
                        {
                            label: "Ryzen 7 9700X - $309.00",
                            value: "Ryzen 7 9700X",
                        },
                        {
                            label: "Ryzen 9 9950X - $522.30",
                            value: "Ryzen 9 9950X",
                        },
                        ]}
                    />
                }
                {
                    processor && <PartSelector
                        partKey="motherboard"
                        title="Choose your Motherboard"
                        options={[
                        {
                            label: "Asus ROG Strix Z790-E - $299.00",
                            value: "Asus ROG Strix Z790-E",
                        },
                        {
                            label: "MSI MPG B550 Gaming Edge WiFi - $199.00",
                            value: "MSI MPG B550 Gaming Edge WiFi",
                        },
                        ]}
                    />
                }
                {
                    motherboard && <PartSelector
                        partKey="gpu"
                        title="Choose your GPU"
                        options={[
                        {
                            label: "NVIDIA GeForce RTX 3060 - $329.00",
                            value: "NVIDIA GeForce RTX 3060",
                        },
                        {
                            label: "AMD Radeon RX 6700 XT - $479.00",
                            value: "AMD Radeon RX 6700 XT",
                        },
                        ]}
                    />
                }
                {
                    gpu && <PartSelector
                        partKey="ram"
                        title="Choose your RAM"
                        options={[
                        {
                            label: "Corsair Vengeance LPX 16GB - $69.99",
                            value: "Corsair Vengeance LPX 16GB",
                        },
                        {
                            label: "G.Skill Ripjaws V 32GB - $129.99",
                            value: "G.Skill Ripjaws V 32GB",
                        },
                        ]}
                    />
                }
                {
                    ram && <PartSelector
                        partKey="storage"
                        title="Choose your Storage"
                        options={[
                        {
                            label: "Samsung 970 EVO Plus 1TB - $129.99",
                            value: "Samsung 970 EVO Plus 1TB",
                        },
                        {
                            label: "Western Digital Blue SN550 2TB - $199.99",
                            value: "Western Digital Blue SN550 2TB",
                        },
                        ]}
                    />
                }
                {
                    storage && <PartSelector
                        partKey="powerSupply"
                        title="Choose your Power Supply"
                        options={[
                        {
                            label: "Corsair RM750x 750W - $129.99",
                            value: "Corsair RM750x 750W",
                        },
                        {
                            label: "EVGA SuperNOVA 850 G5 - $159.99",
                            value: "EVGA SuperNOVA 850 G5",
                        },
                        ]}
                    />
                }
                {
                    powerSupply && <PartSelector
                        partKey="case"
                        title="Choose your Case"
                        options={[
                        {
                            label: "NZXT H510 - $69.99",
                            value: "NZXT H510",
                        },
                        {
                            label: "Fractal Design Meshify C - $89.99",
                            value: "Fractal Design Meshify C",
                        },
                        ]}
                    />
                }
            </div>
        </div>
    );
}
export default BuildPage;