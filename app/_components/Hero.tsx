import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 min-h-[93vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h2 className="text-[35px] md:text-[55px] lg:text-[70px] leading-tight text-primary font-extrabold py-5 lg:py-10">
            Craft Magical Stories for kids in Minutes
          </h2>
          <p className="text-2xl text-primary font-light">
            Create fun and personalized stories that bring your child's
            adventures to life and spark their passion for reading. It only
            takes a few seconds!
          </p>
          <Link href={"/create-story"}>
            <Button
              className="mt-5 font-bold p-8 text-2xl"
              color="primary"
              size="lg"
            >
              Create Story
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src={"/assets/hero.png"}
            alt="hero-image"
            width={700}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
