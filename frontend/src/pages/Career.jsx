import React, { useState } from "react";
import toast from "react-hot-toast";
import careerImg from "../assets/career.webp";
const Career = () => {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://baheyconsultancy.in/api/contact/send-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully!");
        setContactData({
          name: "",
          phone: "",
          email: "",
          position: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <section>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5 md:py-8 lg:py-10 flex flex-col gap-16">
        <div className="  flex items-center md:flex-row flex-col-reverse  gap-4">
          <div className="w-full">
            <h2 className="text-3xl md:text-6xl lg:text-8xl  font-bold text-black">
              <span className="text-gray-400">Car</span>eer
            </h2>
            <p className="text-gray-500 text-base md:text-xl font-semibold">
              Join our team and be part of something bigger.
            </p>
            <p className="text-gray-500 text-base md:text-xl font-semibold">
              Explore opportunities to learn, grow, and shape the future with
              us.
            </p>
          </div>
          <div className="w-full h-full">
            <img src={careerImg} alt="" className="rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full mt-16">
            <h2 className="text-3xl font-bold text-black">Why Work With Us?</h2>
            <p className="mt-2 text-gray-600 text-base md:text-lg">
              At our company, we believe in creating a workplace where people
              can thrive, learn and contribute meaningfully. We value
              innovation, collaboration and personal growth, because when you
              grow, we grow together.
            </p>
            <ul className="mt-6 grid md:grid-cols-2 gap-6">
              <li className="p-4 border rounded-xl bg-gray-50">
                🚀 Career growth & learning
              </li>
              <li className="p-4 border rounded-xl bg-gray-50">
                🌎 Remote-friendly culture
              </li>
              <li className="p-4 border rounded-xl bg-gray-50">
                💰 Competitive salaries
              </li>
              <li className="p-4 border rounded-xl bg-gray-50">
                🎉 Fun team activities
              </li>
            </ul>
          </div>

          <div className="w-full bg-ourservices py-4 md:py-8 px-4 md:px-10 rounded-2xl flex flex-col gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                Drop Us a Message
              </h1>
              <p className="text-sm md:text-base text-gray-500">
                {" "}
                Break the ice! Let us help you out
              </p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="name" className="flex flex-col gap-2">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border px-3 py-2 outline-none rounded-sm"
                  placeholder="Enter your name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="phone" className="flex flex-col gap-2">
                Phone
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={contactData.phone}
                  onChange={handleChange}
                  className="border px-3 py-2 outline-none rounded-sm"
                  placeholder="Enter your phone"
                />
              </label>
              <label htmlFor="email" className="flex flex-col gap-2">
                Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                  className="border px-3 py-2 outline-none rounded-sm"
                  placeholder="Enter your email"
                />
              </label>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="position" className="text-sm">
                  Position
                </label>
                <select
                  name="position"
                  id="position"
                  value={contactData.position}
                  onChange={handleChange}
                  className="border px-3 py-2 outline-none rounded-sm"
                >
                  <option value="">Select</option>
                  <option value="web-Developer">Web Developer</option>
                  <option value="frontend-Developer">Frontend Developer</option>
                  <option value="backend-Developer">Backend Developer</option>
                  <option value="ui/Ux-Designer">Ui/Ux Designer</option>
                  <option value="HR-inter">HR inter</option>
                </select>
              </div>
              <label htmlFor="message" className="flex flex-col gap-2">
                Message
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  value={contactData.message}
                  onChange={handleChange}
                  required
                  className="border px-3 py-2 outline-none rounded-sm"
                  placeholder="Enter your message"
                />
              </label>
              <button
                type="submit"
                className="bg-btn-linier w-full py-2 px-4 rounded-xl text-white flex items-center justify-center gap-4"
              >
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
