import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  const links = [
    {
      path: "/",
      text: <FiLinkedin />,
    },
    {
      path: "/",
      text: <FaXTwitter />,
    },
    {
      path: "/",
      text: <FaGithub />,
    },
  ];
  const servicesSection = [
    {
      path: "/services",
      text: "Web Development",
    },
    {
      path: "/services",
      text: "Hr Audit",
    },
    {
      path: "/services",
      text: "Hr Software Management",
    },
    {
      path: "/services",
      text: "UI/UX Design",
    },
    {
      path: "/services",
      text: "UX Audit",
    },
    {
      path: "/services",
      text: "Software Testing",
    },
    {
      path: "/services",
      text: "Hr Statutory",
    },
  ];
  const companySection = [
    {
      path: "/about",
      text: "About Us",
    },
    {
      path: "/contact",
      text: "Contact",
    },
    {
      path: "/services",
      text: "Services",
    },
    {
      path: "/career",
      text: "Career",
    },
    {
      path: "/",
      text: "Privacy Policy",
    },
    {
      path: "/",
      text: "Terms of Service",
    },
  ];
  return (
    <section className="bg-footer-linier  py-10 px-5">
      <div className="flex flex-col gap-10">
        {/* <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex">
            <h1 className="text-xl md:text-3xl font-semibold text-white">
              Ready to Get Started?
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-center ">
            <p className="text-[#fff] opacity-70 text-sm md:text-base">
              We offer a comprehensive range of digital services designed to
              help your business thrive in the modern digital landscape.
            </p>
          </div>
        </div> */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-lg font-bold text-[#fff] opacity-75 hover:opacity-100">
              <a href="/" className="flex items-center gap-2">
                <img src={logo} alt="" /> Bahey Consultancy
              </a>
            </div>
            <p className="text-[#fff] opacity-75 text-sm">
              Transforming businesses through innovative digital solutions and
              cutting-edge technology expertise.
            </p>
            <div className="flex items-center w-full gap-4">
              {links.map((link, i) => (
                <div key={i} className="bg-[#2f3c40] p-2 rounded-xl">
                  <Link className=" text-white rounded-xl" to={link.path}>
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md text-[#fff]">Services</h3>
            <div className="flex flex-col gap-2">
              {servicesSection.map((items, i) => (
                <Link
                  to={items.path}
                  key={i}
                  className="text-[#fff] opacity-75 hover:opacity-100 text-xs"
                >
                  {items.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md text-[#fff]">Company</h3>
            <div className="flex flex-col gap-2">
              {companySection.map((items, i) => (
                <Link
                  to={items.path}
                  key={i}
                  className="text-[#fff] opacity-75 hover:opacity-100 text-xs"
                >
                  {items.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md text-[#fff]">Get in Touch</h3>
            <div className="flex flex-col gap-2">
              <div>
                <a
                  href="mailto:Connect@baheyconsultancy.in"
                  className="text-[#fff] opacity-75 hover:opacity-100 rounded-xl flex items-center gap-2 "
                >
                  <h3 className="bg-[#2f3c40] p-2 w-fit rounded-xl">
                    <MdOutlineMailOutline size={19} />
                  </h3>
                  <span className="text-xs">Connect@baheyconsultancy.in</span>
                </a>
              </div>
              <div>
                <a
                  href="tel:9130316771"
                  className="text-[#fff] opacity-75 hover:opacity-100 rounded-xl flex items-center gap-2 text-sm"
                >
                  <h3 className="bg-[#2f3c40] p-2 w-fit rounded-xl">
                    <IoCallOutline size={18} />
                  </h3>
                  <span className="text-xs">9130316771</span>
                </a>
              </div>
              <div>
                <div className="text-[#fff] opacity-75 hover:opacity-100 rounded-xl flex items-center gap-2 text-sm">
                  <h3 className="bg-[#2f3c40] p-2 w-fit rounded-xl">
                    <IoLocationOutline size={20} />
                  </h3>
                  <span className="text-xs">Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-secondary"></div>
        <footer className="text-center text-sm text-gray-400 py-4">
          © {new Date().getFullYear()}
          <span className="text-white font-medium"> Bahey Consultancy</span>.
          All rights reserved. | Developed by{" "}
          <span className="text-white font-medium">
            <a
              href="https://www.linkedin.com/in/pratik-dhere-full-stack-developer"
              target="_blank"
            >
              {" "}
              Pratik Dhere
            </a>
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
