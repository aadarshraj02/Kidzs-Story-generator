"use client";

import Image from "next/image";
import { useState } from "react";
import { OptionField } from "./StoryType";

const ImageStyle = ({ userSelection }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "imageStyle",
    });
  };

  const OptionList = [
    {
      label: "3D Cartoon",
      imageUrl: "/assets/3D.png",
      isFree: true,
    },
    {
      label: "Paper Cut",
      imageUrl: "/assets/paperCut.png",
      isFree: true,
    },
    {
      label: "Water Color",
      imageUrl: "/assets/waterColor.png",
      isFree: true,
    },
    {
      label: "Pixel Style",
      imageUrl: "/assets/pixel.png",
      isFree: true,
    },
  ];

  return (
    <div>
      <label className="font-bold text-4xl text-primary">4. Story Image</label>
      <div className="grid grid-cols-3 gap-3">
        {OptionList.map((item: OptionField, index) => (
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
              className="object-cover h-[110px] rounded-3xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageStyle;
