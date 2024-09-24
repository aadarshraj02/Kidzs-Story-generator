"use client";

import { Button } from "@nextui-org/button";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import { useState } from "react";
import { chatSession } from "../config/GeminiAi";

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}
export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

const CreateStory = () => {
  const [formData, setFormData] = useState<formDataType>();

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
  };

  const generateStory = async () => {
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      ?.replace("{storyType}", formData?.storyType ?? "")
      ?.replace("{storySubject}", formData?.storySubject ?? "")
      ?.replace("{imageStyle}", formData?.imageStyle ?? "");

    try {
      // const result = await chatSession.sendMessage();
      console.log(FINAL_PROMPT);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="uppercase font-extrabold text-primary text-center text-[5vw]">
        Create your story
      </h2>
      <p className="text-2xl text-primary text-center">
        Unlock your creativity with AI: Craft stories like never existed. Let
        our AI bring your imagination to life, one story at a time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        <StorySubjectInput userSelection={onHandleUserSelection} />
        <StoryType userSelection={onHandleUserSelection} />
        <AgeGroup userSelection={onHandleUserSelection} />
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end px-10">
        <Button
          className="mt-3 font-bold p-8 text-2xl"
          color="primary"
          size="lg"
          onClick={generateStory}
        >
          Create Story
        </Button>
      </div>
    </div>
  );
};

export default CreateStory;
