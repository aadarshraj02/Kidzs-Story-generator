"use client";

import { Button } from "@nextui-org/button";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import { useState } from "react";
import { chatSession } from "../config/GeminiAi";
import { db } from "../config/db";
import { StoryData } from "../config/schema";
//@ts-ignore
import uuid4 from "uuid4";

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
  const [loading, setLoading] = useState(false);

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
  };

  const generateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      ?.replace("{storyType}", formData?.storyType ?? "")
      ?.replace("{storySubject}", formData?.storySubject ?? "")
      ?.replace("{imageStyle}", formData?.imageStyle ?? "");

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response.text());
      const response = saveInDB(result?.response.text());
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  const saveInDB = async (output: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          output: JSON.parse(output),
        })
        .returning({
          storyId: StoryData?.storyId,
        });
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
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
          disabled={loading}
        >
          Create Story
        </Button>
      </div>
    </div>
  );
};

export default CreateStory;
