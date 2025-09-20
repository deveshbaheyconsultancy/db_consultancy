import React from "react";
import aboutImg from "../assets/about-bg.webp";
import about_sec from "../assets/about_sec.jpg";
import about_invest from "../assets/about_invest.jpg";
import about_now from "../assets/about_now.jpg";
const About = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5 md:py-8 lg:py-10 flex flex-col gap-16">
      <div className="flex items-center md:flex-row flex-col-reverse  gap-4">
        <div className="w-full">
          <h2 className="text-3xl md:text-6xl lg:text-8xl  font-bold text-black">
            <span className="text-gray-400">Abo</span>ut Us
          </h2>
          <p className="text-gray-500 text-base md:text-xl font-semibold">
            Take control of your financial future and{" "}
          </p>
          <p className="text-gray-500 text-base md:text-xl font-semibold">
            achieve the life you've always dreamed of.
          </p>
        </div>
        <div className="w-full">
          <img src={aboutImg} alt="" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-10">
        <div className="w-1/2 h-full md:flex hidden">
          <img src={about_sec} alt="" className="rounded-2xl" />
        </div>
        <div className="w-full flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-5 md:gap-8">
            <h1 className="text-3xl md:text-6xl font-bold">
              Discover a World of Investment Opportunities
            </h1>
            <p className="text-base md:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              similique repudiandae quos doloribus natus ipsa ea nihil
              voluptatum sunt excepturi vel reiciendis nisi recusandae nobis,
              neque in possimus soluta consequuntur itaque impedit.
            </p>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-4 md:gap-6">
            <div className="w-full flex flex-col gap-3">
              <p className="text-base md:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores architecto molestiae quidem. Saepe quisquam harum
                incidunt aut, architecto labore id iure tempore tenetur nemo
                quae culpa laudantium perferendis ex error!
              </p>
              <p className="text-base md:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                mollitia totam dolorum perspiciatis fuga repellat eveniet
                possimus dignissimos consequatur beatae?
              </p>
            </div>
            <div className="w-full">
              <img src={about_invest} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-3xl md:text-6xl font-semibold bg-gradient-to-r from-[#122126] to-[#1E3A3F] bg-clip-text text-transparent">
              Smart Investment Solutions
            </h1>
          </div>
          <div className="w-full md:w-1/2 md:text-center">
            <p className="text-secondary text-base md:text-base">
              We are a forward-thinking digital agency dedicated to transforming
              businesses through innovative technology solutions.
            </p>
          </div>
        </div>
        <div>
          <img
            src={about_now}
            alt=""
            className="w-full md:h-[600px] object-cover object-left-bottom rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
