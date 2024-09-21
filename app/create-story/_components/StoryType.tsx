"use client";

import Image from "next/image";
import { useState } from "react";

export interface OptionField {
  label: string;
  imageUrl: string;
  isFree: boolean;
}

const StoryType = ({ userSelection }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "storyType",
    });
  };

  const OptionList = [
    {
      label: "Story Book",
      imageUrl: "/assets/story.png",
      isFree: true,
    },
    {
      label: "Bed Story",
      imageUrl: "/assets/bedstory.png",
      isFree: true,
    },
    {
      label: "Educational",
      imageUrl: "/assets/educational.png",
      isFree: true,
    },
  ];

  return (
    <div>
      <label className="font-bold text-4xl text-primary">2.Story Type</label>
      <div className="grid grid-cols-3 gap-3">
        {OptionList.map((item: OptionField, index: number) => (
          <div
            key={index}
            className={`relative mt-3 hover:grayscale-0 cursor-pointer ${
              selectedOption === item.label
                ? "grayscale-0 scale-105"
                : "grayscale"
            }`}
            onClick={() => onUserSelect(item)}
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

export default StoryType;
