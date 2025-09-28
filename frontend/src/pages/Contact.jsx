import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import contactImg from "../assets/contack.jpg";
const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
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
        "https://baheyconsultancy.in/api/requirement/send-requirement",
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

  const toggleFaq = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  const faqs = [
    {
      question: "What services does your consultancy provide?",
      answer:
        "We specialize in business strategy, digital transformation, and technology solutions to help companies streamline operations and scale efficiently.",
    },
    {
      question: "How do you charge for your consultancy services?",
      answer:
        "Our pricing is flexible depending on the project scope. We offer hourly consulting, monthly retainers, and project-based packages tailored to client needs.",
    },
    {
      question: "Do you work with startups as well as established businesses?",
      answer:
        "Yes. We work with startups, SMEs, and large enterprises. Our team adapts strategies based on the size, goals, and challenges of each client.",
    },
    {
      question: "How do you ensure client confidentiality?",
      answer:
        "We follow strict data protection and confidentiality agreements. All client information is handled securely and never shared without consent.",
    },
    {
      question: "Can we schedule a free consultation?",
      answer:
        "Absolutely. We provide a free initial consultation to understand your business goals and suggest the best way forward.",
    },
  ];
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5 md:py-8 lg:py-10 flex flex-col gap-16">
      <div className="  flex items-center md:flex-row flex-col-reverse  gap-4">
        <div className="w-full">
          <h2 className="text-3xl md:text-6xl lg:text-8xl  font-bold text-black">
            <span className="text-gray-400">Con</span>tact Us
          </h2>
          <p className="text-gray-500 text-base md:text-xl font-semibold">
            Unlock your business's true potential and
          </p>
          <p className="text-gray-500 text-base md:text-xl font-semibold">
            build the future you envision.
          </p>
        </div>
        <div className="w-full h-full">
          <img src={contactImg} alt="" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-7">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl">We'd Love to Hear From You</h1>
            <p className="text-sm md:text-base text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ullam doloribus eius itaque eum, fugiat similique aspernatur quos
              ipsum quae dolore adipisci odio dolores, impedit in aliquam
              corrupti quidem amet. Mollitia sapiente officiis, laborum amet
              tempore quo fugit ab dicta.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <a
                href="mailto:Connect@baheyconsultancy.in"
                className=" opacity-75 hover:opacity-100 rounded-xl flex items-center gap-2 "
              >
                <h3 className="bg-[#2f3c40] p-2 w-fit rounded-xl text-white">
                  <MdOutlineMailOutline size={19} />
                </h3>
                <span className="text-base">Connect@baheyconsultancy.in</span>
              </a>
            </div>
            <div>
              <a
                href="tel:9130316771"
                className=" opacity-75 hover:opacity-100 rounded-xl flex items-center gap-2 text-sm"
              >
                <h3 className="bg-[#2f3c40] p-2 w-fit rounded-xl text-white">
                  <IoCallOutline size={18} />
                </h3>
                <span className="text-base">9130316771</span>
              </a>
            </div>
            <div>
              <div className=" opacity-75 hover:opacity-100 rounded-xl flex items-center gap-2 text-sm">
                <h3 className="bg-[#2f3c40] p-2 w-fit rounded-xl text-white">
                  <IoLocationOutline size={20} />
                </h3>
                <span className="text-base">Pune, Maharashtra</span>
              </div>
            </div>
          </div>
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 md:gap-3"
          >
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
      </div>
      <section>
        <div className="max-w-3xl mx-auto px-2 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            {" "}
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-md shadow-sm bg-white py-3 px-6"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex items-center  text-start justify-between w-full font-semibold text-base md:text-lg"
                >
                  {faq.question}
                  <span>{openIndex === i ? "-" : "+"}</span>
                </button>
                {openIndex === i && (
                  <div className="py-2 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Contact;
