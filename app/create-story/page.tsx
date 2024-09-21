"use client";

import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";

export interface fieldData {
  fieldName: string;
  fiendValue: string;
}

const CreateStory = () => {
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
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
    </div>
  );
};

export default CreateStory;
