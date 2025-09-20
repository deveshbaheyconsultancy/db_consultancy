import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import servicesImg from "../assets/services.jpg";
import webDev from "../assets/webDev.webp";
import hrAudit from "../assets/hrAudit.webp";
import hrSortMangment from "../assets/hrSortMangment.webp";
import uiuxDesign from "../assets/uiuxDesign.webp";
import uxAudit from "../assets/uxAudit.webp";
import softTester from "../assets/softTester.webp";
import hrStatutory from "../assets/hrStatutory.webp";

const Services = () => {
  const content = [
    {
      title: "Web Development",
      img: webDev,
      description:
        "We build fast, secure, and scalable websites tailored to your business needs. From corporate websites to custom web applications, our solutions help you establish a strong online presence and deliver seamless user experiences.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white">
          Web Development
        </div>
      ),
    },
    {
      title: "Hr Audit",
      img: hrAudit,
      description:
        "Our comprehensive HR Audits evaluate your current policies, procedures, and practices to ensure legal compliance and operational efficiency. We identify potential risks and provide actionable recommendations to strengthen your HR foundation.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white">
          Hr Audit
        </div>
      ),
    },
    {
      title: "Hr Software Management",
      img: hrSortMangment,
      description:
        "We help you select, implement, and manage the right HR software to automate and streamline your operations. From payroll to performance management, our expertise ensures your technology stack enhances productivity and employee experience.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-600))] text-white">
          Hr Software Management
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      img: uiuxDesign,
      description:
        "We create intuitive and visually compelling user interfaces (UI) and user experiences (UX) that captivate your audience. Our designs are centered on user research to ensure your digital products are beautiful and easy to use.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          UI/UX Design
        </div>
      ),
    },
    {
      title: "UX Audit",
      img: uxAudit,
      description:
        "Our expert UX Audit provides an in-depth analysis of your existing website or application to identify usability issues. We deliver a comprehensive report with actionable recommendations to enhance user flow and boost conversion rates.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-600))] text-white">
          UX Audit
        </div>
      ),
    },
    {
      title: "Software Testing",
      img: softTester,
      description:
        "Ensure your software is reliable, functional, and secure with our comprehensive testing and quality assurance (QA) services. We conduct rigorous testing to identify bugs and guarantee a flawless user experience before you go live.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-600))] text-white">
          Software Testing
        </div>
      ),
    },
    {
      title: "Hr Statutory",
      img: hrStatutory,
      description:
        "Navigate the complexities of labor laws with ease. We manage all aspects of your HR statutory compliance, from Provident Fund (PF) and ESI to Professional Tax, ensuring your business remains 100% compliant and avoids penalties.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--violet-600))] text-white">
          Hr Statutory
        </div>
      ),
    },
  ];
  // const content = [
  //   {
  //     title: "Web Development",
  //     img: webDev,
  //     description:
  //       "We build fast, secure, and scalable websites tailored to your business needs. From corporate websites to custom web applications, our solutions help you establish a strong online presence and deliver seamless user experiences.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white">
  //         Web Development
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Hr Audit",
  //     img: hrAudit,
  //     description:
  //       "Our team designs and develops intuitive mobile applications for iOS and Android. Whether it's a startup idea or enterprise-level app, we create user-friendly solutions that keep your customers engaged on the go.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white">
  //         Hr Audit
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Hr Software Management",
  //     img: hrSortMangment,
  //     description:
  //       "Boost your online visibility with our digital marketing strategies. From SEO and social media campaigns to paid ads and content marketing, we help you attract, engage, and convert your target audience effectively.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-600))] text-white">
  //         Hr Software Management
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "UI/UX Design",
  //     img: uiuxDesign,
  //     description:
  //       "We provide expert business consulting to help you optimize processes, improve efficiency, and scale your business. Our tailored solutions empower you to make data-driven decisions and achieve sustainable growth.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
  //         UI/UX Design
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "UX Audit",
  //     img: uxAudit,
  //     description:
  //       "We begin with a detailed consultation to understand your business needs, goals, and challenges. This ensures we deliver solutions aligned with your vision from the very start.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-600))] text-white">
  //         UX Audit
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Software Testing",
  //     img: softTester,
  //     description:
  //       "Our team gathers and analyzes your requirements to design a roadmap. We define project scope, resources, and timelines to ensure smooth execution.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-600))] text-white">
  //         Software Testing
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Hr Statutory",
  //     img: hrStatutory,
  //     description:
  //       "We design user-friendly interfaces and develop robust solutions tailored to your requirements. Agile methodologies ensure flexibility and faster delivery.",
  //     content: (
  //       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--violet-600))] text-white">
  //         Hr Statutory
  //       </div>
  //     ),
  //   },
  // ];
  return (
    <div className="flex flex-col gap-8">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5 md:py-8 lg:py-10 flex items-center md:flex-row flex-col-reverse  gap-4">
        <div className="w-full">
          <h2 className="text-3xl md:text-6xl lg:text-8xl  font-bold text-black">
            <span className="text-gray-400">Ser</span>vices
          </h2>
          <p className="text-gray-500 text-base md:text-xl font-semibold">
            Unlock your business's true potential and
          </p>
          <p className="text-gray-500 text-base md:text-xl font-semibold">
            build the future you envision.
          </p>
        </div>
        <div className="w-full h-full">
          <img src={servicesImg} alt="" className="rounded-3xl" />
        </div>
      </div>
      <div>
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Services;
