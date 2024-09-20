import Image from "next/image";

const StoryType = () => {
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
      <div className="grid grid-cols-3 gap-3 ">
        {OptionList.map((item, index) => (
          <div key={index}>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={200}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryType;
