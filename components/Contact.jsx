"use client"
import Link from "next/link";
import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false)


  return (
    <section id="contact" className=" md:p-7 lg:p-10">
      <div className="w-full md:rounded-3xl rounded-2xl p-7 bg-innerbg  ">
        <h2 className="title !font-bold">Let's Connect</h2>
        <p className="paragraph md:!text-xl md:my-3">
          I would love to hear from you and discuss any potential opportunities
          or collaborations.
        </p>
        <div className="flex gap-4 md:mt-4 text-secondary">
          <Link
            href="/"
            className="hover:bg-blue-400/30 hover:text-gray-950  transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            <FaGithub />
          </Link>
          <Link
            href="/"
            className="hover:bg-blue-400/30 hover:text-gray-950  transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="/"
            className="hover:bg-blue-400/30 hover:text-gray-950  transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            {" "}
            <FaInstagram />
          </Link>
        </div>
      </div>
      <form>
        <div className="flex flex-col md:flex-row gap-6 px my-6">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 px-8 bg-innerbg  focus:outline-none border-2 dark:border-gray-600/60  focus:border-[#06b8ff88] py-5 md:rounded-3xl rounded-2xl"
          />
          <input
            type="text"
            placeholder="Email"
            className="flex-1 px-8 bg-innerbg focus:outline-none border-2 dark:border-gray-600/60  focus:border-[#06b8ff88] py-5 md:rounded-3xl rounded-2xl"
          />
        </div>
        <div className="p-0  overflow-hidden relative">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full h-32 bg-innerbg md:h-52 px-8 border-2 !outline-none transition-border dark:border-gray-600/60  focus:border-[#06b8ff88] py-8 md:rounded-3xl rounded-2xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          ></textarea>
          <div
            className={`absolute ${
              isFocused && "border-[#06b8ff88]"
            } -bottom-2 mb-3 right-0 dark:border-gray-600/60 rounded-tl-3xl bg-outerbg border-t-2 border-l-2 p-3 `}
          >
            <button
              id="btn-btn"
              className="!text-white !rounded-full !px-5 btn-primary flex gap-2 items-center"
            >
              Send <IoSend />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
