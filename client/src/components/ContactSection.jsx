import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function ContactSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36">
      <span className="uppercase text-3xl lg:text-2xl font-bold gradientText mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradientText mb-5 lg:mb-10">
            Contact Me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:piyushraikwar289@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              piyushraikwar289@gmail.com
            </a>
            <a
              href="tel:+918817762774"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              +91 88177-62774
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <AiFillGithub className="text-white text-2xl" />
            <AiFillLinkedin className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center">
            OR
          </h2>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradientText font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw] cursor-text"
            />
            <input
              type="email"
              name="emai"
              id="email"
              placeholder="Enter Your Email"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradientText font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw] cursor-text"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Write Your Message"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradientText font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw] cursor-text"
            ></textarea>
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl font-semibold text-zinc-900 rounded-lg hover:scale-105 transition-all duration-100 progressBarVal"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
