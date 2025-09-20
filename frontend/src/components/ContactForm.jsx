import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
const ContactForm = ({ close }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bookingDate: "",
    message: "",
    service: "",
    Comname: "",
    comSize: "",
    comUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:8080/api/requirement/send-requirement",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Requirement form sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          bookingDate: "",
          message: "",
          service: "",
          Comname: "",
          comSize: "",
          comUrl: "",
        });
        close();
      } else {
        toast.error(data.message || "Failed to send form.");
      }
    } catch (error) {
      toast.error("Something went wrong. please try again");
    }
  };
  return (
    <section className="flex items-center justify-center bg-[rgba(0,0,0,0.3)] w-full h-full">
      <div className="overflow-y-scroll md:overflow-auto  h-[650px] w-[300px] md:w-[500px] flex flex-col gap-4 bg-slate-50 py-6 px-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Book a Service</h2>
          </div>
          <div>
            <button onClick={close}>
              <IoClose size={24} />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="phone" className="text-sm">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none"
                required
              />
            </div>{" "}
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="date" className="text-sm">
                Date
              </label>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                className="w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="Comname" className="text-sm">
                Company Name
              </label>
              <input
                type="text"
                id="Comname"
                name="Comname"
                value={formData.Comname}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="comSize" className="text-sm">
                Company Size
              </label>
              <select
                name="comSize"
                id="comSize"
                value={formData.comSize}
                onChange={handleChange}
                className="w-full text-sm py-1 px-2 md:py-2 md:px-4 rounded-lg border border-gray-500 bg-transparent focus:outline-none"
              >
                <option value="">Select a Size</option>
                <option value="1-10">1 - 10 employees</option>
                <option value="11-50">11 - 50 employees</option>
                <option value="51-200">51 - 200 employees</option>
                <option value="201-500">201 - 500 employees</option>
                <option value="501-1000">501 - 1000 employees</option>
                <option value="1001-5000">1001 - 5000 employees</option>
                <option value="5000+">5000+ employees</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="comUrl" className="text-sm">
              Company URL
            </label>
            <input
              type="url"
              id="comUrl"
              name="comUrl"
              value={formData.comUrl}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="service" className="text-sm">
              Service
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full text-sm py-1 px-2 md:py-2 md:px-4 rounded-lg border border-gray-500 bg-transparent focus:outline-none"
            >
              <option value="">Select a Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Hr Audit">Hr Audit</option>
              <option value="Hr Software Management">
                Hr Software Management
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="UX Audit">UX Audit</option>
              <option value="Software Testing">Software Testing</option>
              <option value="Hr Statutory">Hr Statutory</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your message..."
              className="resize-none w-full py-1 px-2 md:py-2 md:px-4 text-sm rounded-lg border border-gray-500 bg-transparent focus:outline-none md:h-24"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-btn-linier text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
