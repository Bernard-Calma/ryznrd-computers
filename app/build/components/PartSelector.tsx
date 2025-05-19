"use client";

import { useDispatch, useSelector } from "react-redux";
import { setPart } from "@/store/features/buildSlice";
import selectBuild from "@/store/features/buildSlice";

interface Option {
  label: string;
  value: string;
}

interface PartSelectorProps {
  partKey: keyof ReturnType<typeof selectBuild>;
  title: string;
  options: Option[];
}

export default function PartSelector({ partKey, title, options }: PartSelectorProps) {
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: any) => state.build[partKey]);

  const handleSetPart = ({ part, value }: { part: keyof ReturnType<typeof selectBuild>; value: string }) => {
    dispatch(setPart({ part, value }));
  };

  return (
    <div className="flex flex-col my-4 justify-between items-center p-1.5 text-gray-400">
      <h1 className="text-white">{title}</h1>
      <ul className="flex space-x-4">
        {options.map((option) => (
          <li
            key={option.value}
            className={`hover:text-white cursor-pointer ${
              selectedValue === option.value ? "text-white" : ""
            }`}
            onClick={() => handleSetPart({ part: partKey, value: option.value })}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
