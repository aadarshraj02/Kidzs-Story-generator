"use client";

import Image from "next/image";
import { useState } from "react";

const AgeGroup = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const OptionList = [
    {
      label: "0-2 Years",
      imageUrl: "/assets/02Years.png",
      isFree: true,
    },
    {
      label: "3-5 Years",
      imageUrl: "/assets/35Years.png",
      isFree: true,
    },
    {
      label: "5-8 Years",
      imageUrl: "/assets/58Years.png",
      isFree: true,
    },
  ];

  return (
    <div>
      <label className="font-bold text-4xl text-primary">3. Age Group</label>
      <div className="grid grid-cols-3 gap-3">
        {OptionList.map((item, index) => (
          <div
            key={index}
            className={`relative mt-3 hover:grayscale-0 cursor-pointer ${
              selectedOption === item.label
                ? "grayscale-0 scale-105"
                : "grayscale"
            }`}
            onClick={() => setSelectedOption(item.label)}
          >
            <h2 className="absolute bottom-5 text-white text-center w-full text-2xl">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={200}
              height={500}
              className="object-cover h-[240px] rounded-3xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeGroup;
