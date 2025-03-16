"use client";

import React from "react";
import { Github, Gitlab } from "lucide-react";
import { FaBitbucket } from "react-icons/fa";

type Option = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

// Props for SegmentedControl
type SegmentedControlProps = {
  selected: string;
  setSelected: (value: string) => void;
};

const options: Option[] = [
  { label: "GitHub", value: "github", icon: <Github className="w-4 h-4 mr-2" /> },
  { label: "GitLab", value: "gitlab", icon: <Gitlab className="w-4 h-4 mr-2" /> },
  { label: "Bitbucket", value: "bitbucket", icon: <FaBitbucket className="w-4 h-4 mr-2" /> },
];

const SegmentedControl: React.FC<SegmentedControlProps> = ({ selected, setSelected }) => {

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="border border-[#eaeaea] rounded-full inline-flex bg-white p-2 shadow-sm">
      <div
        role="radiogroup"
        aria-required="false"
        dir="ltr"
        tabIndex={0}
        style={{ outline: "none" }}
        className="relative flex isolate rounded-full w-full select-none gap-10"
      >
        {options.map((option) => {
          const isSelected = selected === option.value;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              data-state={isSelected ? "checked" : "unchecked"}
              value={option.label}
              onClick={() => handleSelect(option.value)}
              className={`relative z-10 flex items-center justify-center gap-0.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-400/50 ${
                isSelected
                  ? "text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          );
        })}

        {/* Sliding Indicator */}
        <div
          className="absolute h-9 rounded-full transition-all duration-300 ease-in-out bg-blue-500 shadow-md"
          style={{
            width: `${100 / options.length}%`,
            transform: `translateX(${
              options.findIndex((opt) => opt.value === selected) * 100
            }%)`,
          }}
        />
      </div>
    </div>
  );
};

export default SegmentedControl;
