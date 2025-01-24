import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="p-5 md:p-10 lg:p-20">
      <div className="w-full md:rounded-3xl rounded-2xl p-7 bg-white  ">
        <h2 className="title !font-bold">Let's Connect</h2>
        <p className="paragraph !text-xl my-3">
          I would love to hear from you and discuss any potential opportunities
          or collaborations.
        </p>
        <div className="flex gap-4 mt-4 text-blue-500">
          <Link
            href="/"
            className="hover:bg-blue-400/30 hover:text-gray-950 transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            <FaGithub />
          </Link>
          <Link
            href="/"
            className="hover:bg-blue-400/30 hover:text-gray-950 transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="/"
            className="hover:bg-blue-400/30 hover:text-gray-950 transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            {" "}
            <FaInstagram />
          </Link>
        </div>
      </div>
      <form>
        <div className="flex gap-6 px my-6">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 px-8 border-2 outline-[#06b8ff88] py-5 md:rounded-3xl rounded-2xl"
          />
          <input
            type="text"
            placeholder="Email"
            className="flex-1 px-8 border-2 outline-[#06b8ff88] py-5 md:rounded-3xl rounded-2xl"
          />
        </div>
        <div className="p-0 group focus-within:group-last:!border-[#06b8ff88] overflow-hidden relative">
          <textarea
            name="message"
            id=""
            placeholder="Message"
            className="w-full h-32 md:h-52 px-8 border-2 !outline-none transition-border focus:border-[#06b8ff88] py-8 md:rounded-3xl rounded-2xl"
          ></textarea>
          <div className="absolute -bottom-2 mb-3 right-0 rounded-tl-3xl bg-[#f2fafc] border-t-2 border-l-2 p-3 ">
            <button className="!text-white !rounded-full !px-5 btn-primary flex gap-2 items-center">
              Send <IoSend />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
