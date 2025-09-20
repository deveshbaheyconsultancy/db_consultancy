import React, { useState } from "react";
import hero from "../assets/hero-section.webp";
import { TiFlashOutline } from "react-icons/ti";
import { FaRegThumbsUp, FaStar, FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline, IoIosStarOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import CountUp from "react-countup";
import { MdWifiTethering, MdOutlineTrackChanges } from "react-icons/md";
import { LuLightbulb } from "react-icons/lu";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrLineChart } from "react-icons/gr";
import { AiOutlineSecurityScan } from "react-icons/ai";
import OurServices from "../components/OurServices";
import ContactForm from "../components/ContactForm";
import mission from "../assets/mission.webp";
import mission_icon from "../assets/mission-icon.webp";
import vision_icon from "../assets/vision-icon.webp";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = () => {
    setIsOpen(true);
  };
  const handlePopupClose = () => {
    setIsOpen(false);
  };
  const heroIcon = [
    {
      class: "text-green-400 ",
      icon: <IoMdCheckmarkCircleOutline size={22} />,
      text: "Expert Team",
    },
    {
      class: "text-org-400",
      icon: <IoIosStarOutline size={23} />,
      text: "24/7 Support",
    },
    {
      class: "text-blue-400",
      icon: <TiFlashOutline size={24} />,
      text: "Proven Results",
    },
  ];
  const stats = [
    {
      end: 500,
      suffix: "+",
      label: "Projects Completed",
      color: "text-blue-500",
    },
    {
      end: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-green-500",
    },
    {
      end: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-purple-500",
    },
  ];
  const aboutIcon = [
    {
      MainClass:
        "bg-[#EFF6FF] flex items-center text-center justify-center gap-4 flex-col p-5 rounded-xl shadow-xl",
      class: "p-4 bg-blue-linier text-white w-fit rounded-xl shadow-xl",
      icon: <FiUsers size={24} />,
      text: "Expert Team",
      para: "Our diverse team of specialists brings years of experience and cutting-edge expertise to every project.",
    },
    {
      MainClass:
        "bg-[#ECFDF5] flex items-center text-center justify-center gap-4 flex-col p-5 rounded-xl shadow-xl",
      class: "p-4 bg-green-linier text-white w-fit rounded-xl shadow-xl",
      icon: <MdWifiTethering size={24} />,
      text: "Results-Driven",
      para: "We focus on measurable outcomes that directly impact your business growth and success metrics.",
    },
    {
      MainClass:
        "bg-[#FFFBEB] flex items-center text-center justify-center gap-4 flex-col p-5 rounded-xl shadow-xl",
      class: "p-4 bg-org-linier text-white w-fit rounded-xl shadow-xl",
      icon: <LuLightbulb size={24} />,
      text: "Innovation First",
      para: "We stay ahead of industry trends, implementing the latest technologies and best practices.",
    },
    {
      MainClass:
        "bg-[#FAF5FF] flex items-center text-center justify-center gap-4 flex-col p-5 rounded-xl shadow-xl",
      class: "p-4 bg-parpal-linier text-white w-fit rounded-xl shadow-xl",
      icon: <LiaCertificateSolid size={24} />,
      text: "Quality Assured",
      para: "Every project undergoes rigorous testing and quality control to ensure exceptional delivery.",
    },
  ];
  const ourProcess = [
    {
      icon: <GrLineChart />,
      stepe: "Step 1",
      para: "Projects Completed",
      tag: "+25% this year",
    },
    {
      icon: <MdOutlineTrackChanges />,
      stepe: "Step 2",
      para: "Countries Served",
      tag: "Global reach",
    },
    {
      icon: <AiOutlineSecurityScan />,
      stepe: "Step 3",
      para: "Uptime Record",
      tag: "Reliability",
    },
    {
      icon: <TiFlashOutline />,
      stepe: "Step 4",
      para: "Support Available",
      tag: "Always here",
    },
  ];
  return (
    <div className="flex flex-col gap-16 container mx-auto">
      <section className="px-5 md:px-10 lg:px-20 py-6 w-full">
        <div className="flex items-center lg:flex-row flex-col gap-8 bg-navbar-color py-6 px-3 rounded-3xl">
          <div className="w-full flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[000000]">
                Transform Your
              </h1>
              <h1 className="text-3xl md:text-5xl  font-bold text-primary">
                Business with
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#122126] to-[#1E3A3F] bg-clip-text text-transparent">
                Digital Excellence
              </h1>
            </div>
            <div>
              <p className="text-secondary text-sm md:text-xl">
                We deliver cutting-edge digital solutions that drive growth,
                enhance efficiency, and elevate your brand in the digital
                landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {heroIcon.map((iconH, i) => (
                <div
                  key={i}
                  className="border border-[122126] flex items-center gap-2 justify-start text-sm text-secondary py-2 md:px-4 px-2 rounded-xl"
                >
                  <span className={iconH.class}>{iconH.icon}</span>
                  {iconH.text}
                </div>
              ))}
            </div>
            <div className="">
              <button
                onClick={handlePopup}
                className="bg-btn-linier w-fit py-2 px-4 rounded-xl text-white flex items-center gap-4"
              >
                Explore Services <FaArrowRightLong className="animate-bounce" />
              </button>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center bg-navbar-color rounded-xl py-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <h2 className={`text-2xl md:text-4xl ${stat.color}`}>
                    <CountUp end={stat.end} duration={2.5} />
                    {stat.suffix}
                  </h2>
                  <p className="text-secondary text-sm md:text-base ">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative flex flex-col items-center justify-center">
            <div className="p-1 bg-white absolute -top-3 right-0 rounded-xl z-10">
              <div className="md:p-6 p-4 bg-primary rounded-lg">
                <h2 className="text-base md:text-xl text-white">
                  Award Winning
                </h2>
                <h4 className="text-sm md:text-xs text-white">
                  Digital Agency 2025
                </h4>
              </div>
            </div>
            <img
              src={hero}
              alt=""
              className="transition-transform duration-500 ease-in-out hover:rotate-3 rounded-3xl"
            />
            <div className="absolute bottom-0 left-0 rounded-xl bg-white shadow-xl p-6 flex items-center gap-4">
              <span>
                <FaRegThumbsUp size={28} />
              </span>
              <div>
                1000+ Happy Clients{" "}
                <span>
                  <ul className="flex items-center gap-1 text-org-400">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-0 md:px-10 lg:px-20 py-4 w-full">
        <div className=" bg-ourservices px-6 py-10 flex flex-col gap-16 rounded-3xl">
          <div className="flex flex-col gap-10">
            <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-col gap-3 items-center">
                <h2 className="text-primary py-2 px-6 border border-[#b9bec0] rounded-xl text-sm">
                  About Our Company
                </h2>
                <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#122126] to-[#1E3A3F] bg-clip-text text-transparent">
                  About TechServices
                </h1>
              </div>
              <div className="w-full md:w-1/2 text-center">
                <p className="text-secondary text-sm md:text-base">
                  We are a forward-thinking digital agency dedicated to
                  transforming businesses through innovative technology
                  solutions. Our mission is to bridge the gap between complex
                  technology and business success.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aboutIcon.map((iconA, i) => (
                  <div kay={i} className={iconA.MainClass}>
                    <div className="flex flex-col items-center gap-2">
                      <h6 className={iconA.class}>{iconA.icon}</h6>
                      <h4>{iconA.text}</h4>
                    </div>
                    <div>
                      <p className="text-secondary text-sm">{iconA.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 shadow-xl bg-white p-8 rounded-xl">
            <div className="w-full flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl">Our Process</h1>
              <p className="text-sm md:text-base text-secondary">
                Founded in 2019, TechServices emerged from a simple yet powerful
                vision: to make advanced technology accessible to businesses of
                all sizes. What started as a small team of passionate developers
                has grown into a comprehensive digital agency.
              </p>
              <p className="text-sm md:text-base text-secondary">
                Today, we serve clients across various industries, from startups
                to enterprise-level organizations, helping them navigate the
                digital transformation journey with confidence and success.
              </p>
              <div className="flex flex-wrap gap-2">
                <h6 className="text-secondary text-sm py-2 px-6 border border-[#b9bec0] rounded-xl">
                  ISO 27001
                </h6>
                <h6 className="text-secondary text-sm py-2 px-6 border border-[#b9bec0] rounded-xl">
                  SOC 2
                </h6>
                <h6 className="text-secondary text-sm py-2 px-6 border border-[#b9bec0] rounded-xl">
                  GDPR Compliant
                </h6>
                <h6 className="text-secondary text-sm py-2 px-6 border border-[#b9bec0] rounded-xl">
                  AWS Partner
                </h6>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {ourProcess.map((process, i) => (
                <div
                  kay={i}
                  className="flex items-center flex-col gap-3 justify-center bg-[#FAFBFC] p-3 rounded-xl border border-secondary"
                >
                  <div className="flex items-center justify-center">
                    <h6 className="bg-[#e8e9e9] rounded-xl p-2 text-primary">
                      {process.icon}
                    </h6>
                  </div>
                  <h1 className="text-2xl text-primary">{process.stepe}</h1>
                  <p className="text-secondary text-sm">{process.para}</p>
                  <div className="bg-[#F1F5F9] rounded-xl px-2 py-1 text-primary ">
                    <h4 className="text-secondary text-sm "> {process.tag}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section className="px-0 md:px-10 lg:px-20 py-4 w-full">
        <div className="flex flex-col gap-8">
          <div className="flex itecms-center flex-col-reverse md:flex-row gap-4 ">
            <div className="w-full mission rounded-3xl">
              <div className="w-full bg-mission-linier opacity-75 flex flex-col gap-1 justify-end p-8 text-white rounded-3xl">
                <h3 className="text-3xl">Mission</h3>
                <p className="text-lg">Perform complex SEO audits and</p>
                <p className="text-lg">optimizations with a single click.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src={vision_icon} alt="" className="rounded-3xl" />
            </div>
          </div>
          <div className="flex itecms-center flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src={mission_icon} alt="vission" className="rounded-3xl" />
            </div>
            <div className="w-full vision rounded-3xl">
              <div className="w-full bg-mission-linier opacity-75 flex flex-col gap-1 justify-end p-8 text-white rounded-3xl">
                <h3 className="text-3xl">Vission</h3>
                <p className="text-lg">Perform complex SEO audits and</p>
                <p className="text-lg">optimizations with a single click.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-10 lg:px-20 py-4 w-full">
        <OurServices handlePopup={handlePopup} />
      </section>
      <section className="px-0 md:px-10 lg:px-20  py-4 md:py-10 lg:py-20 w-full bg-[#969da838] rounded-3xl flex flex-col gap-8">
        <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex">
            <h1 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#122126] to-[#1E3A3F] bg-clip-text text-transparent">
              Ready to Get Started?
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <p className="text-secondary text-sm md:text-base">
              We offer a comprehensive range of digital services designed to
              help your business thrive in the modern digital landscape.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            onClick={handlePopup}
            className="justify-center flex items-center gap-2 bg-btn-linier py-2 px-6 rounded-lg text-white"
          >
            Book Now <FaArrowRightLong className="animate-bounce" />
          </button>
        </div>
      </section>
      <section className="px-5 md:px-10 lg:px-20  py-4 md:py-10 lg:py-20 w-full bg-[#dbdee273] rounded-3xl flex flex-col gap-8">
        <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex">
            <h1 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#122126] to-[#1E3A3F] bg-clip-text text-transparent">
              Ready to Join Our Success Stories?
            </h1>
          </div>
          <div className="w-full md:w-1/2 md:text-center">
            <p className="text-secondary text-sm md:text-base">
              Let's discuss how we can help transform your business with our
              proven digital solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <h6 className="text-sm text-green-600 bg-green-200 border border-green-300 py-2 px-6 rounded-lg">
              Free Consultation
            </h6>
            <h6 className="text-sm text-blue-600 bg-blue-200 border border-blue-300 py-2 px-6 rounded-lg">
              No Commitment Required
            </h6>
            <h6 className="text-sm text-org-600 bg-org-200 border border-org-300 py-2 px-6 rounded-lg">
              24hr Response
            </h6>
          </div>
        </div>
      </section>
      {isOpen && (
        <section className="fixed top-0 left-0 right-0 bottom-0 z-50">
          <ContactForm close={handlePopupClose} />
        </section>
      )}
    </div>
  );
};

export default Home;
