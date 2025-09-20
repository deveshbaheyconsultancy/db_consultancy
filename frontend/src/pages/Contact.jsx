import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import contactImg from "../assets/contack.jpg";
const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:8080/api/contact/send-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully!");
        setContactData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="name" className="flex flex-col gap-2">
              Name
              <input
                type="text"
                name="name"
                id="name"
                className="border px-1 py-2 outline-none rounded-sm"
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
                className="border px-1 py-2 outline-none rounded-sm"
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
                className="border px-1 py-2 outline-none rounded-sm"
                placeholder="Enter your email"
              />
            </label>

            <label htmlFor="message" className="flex flex-col gap-2">
              Message
              <textarea
                type="text"
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                required
                className="border px-1 py-2 outline-none rounded-sm"
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
