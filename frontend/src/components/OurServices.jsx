import React from "react";
import { IoCodeSharp } from "react-icons/io5";
import { AiOutlineAudit } from "react-icons/ai";
import { TbUxCircle } from "react-icons/tb";
import { LuMonitorCog } from "react-icons/lu";
import one from "../assets/web-dev.webp";
import two from "../assets/hr-audit.webp";
import three from "../assets/ux-audit.webp";
import five from "../assets/sof-tes.webp";
import { FaArrowRightLong } from "react-icons/fa6";
const OurServices = ({ handlePopup }) => {
  const cardData = [
    {
      icon: <IoCodeSharp size={24} />,
      iconClass: "bg-services-blue-linier p-3 rounded-xl text-white",
      image: one,
      pricing: "2,500",
      offer: "",
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",

    },
    {
      icon: <AiOutlineAudit size={24} />,
      iconClass: "bg-services-green-linier p-3 rounded-xl text-white",
      image: two,
      pricing: "5,000",
      offer: "Popular",
      title: "HR audit",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
    },
    {
      icon: <TbUxCircle size={24} />,
      iconClass: "bg-services-org-linier p-3 rounded-xl text-white",
      image: three,
      pricing: "1,500",
      offer: "",
      title: "UX Audit",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement.",
    },
    {
      icon: <LuMonitorCog size={24} />,
      iconClass: "bg-services-perpal-linier p-3 rounded-xl text-white",
      image: five,
      pricing: "2000",
      offer: "",
      title: "Software Testing.",
      description:
        "Strategic technology consulting to help you make informed decisions and optimize your digital transformation.",
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-primary py-2 px-6 border border-[#b9bec0] rounded-xl text-sm">
              Our Expertise
            </h2>
            <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#122126] to-[#1E3A3F] bg-clip-text text-transparent">
              Our Services
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <p className="text-secondary text-sm md:text-base">
              We offer a comprehensive range of digital services designed to
              help your business thrive in the modern digital landscape.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((data, i) => (
            <div key={i} className="shadow-xl bg-white rounded-xl">
              <div className="relative">
                <div className="flex items-center gap-4 absolute top-3 left-3 shadow-xl rounded-xl">
                  <h4 className={data.iconClass}>{data.icon}</h4>
                </div>
                <img src={data.image} alt="" className="rounded-t-xl w-full" />
              </div>
              <div className="flex flex-col justify-between gap-8 p-4 md:p-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl text-primary">{data.title}</h1>
                  <p className="text-base text-secondary ">
                    {data.description}
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={handlePopup}
                    className="w-full justify-center flex items-center gap-2 bg-btn-linier py-2 px-6 rounded-lg text-white"
                  >
                    Book Now <FaArrowRightLong className="animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
