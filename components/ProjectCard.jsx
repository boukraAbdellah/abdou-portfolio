import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";


const ProjectCard = ({ project , index }) => {
  const { name, type, description, image, technologies } = project;
  let even = index % 2 === 0 ? true : false;
  
  return (
    <div
      className={`flex flex-col md:flex-row items-center relative my-6 md:my-28  w-full ${
        even ? "justify-start " : "justify-end"
      }`}
    >
      {/* Image part j-e */}
      <Link
        href="/"
        className=" w-[60%] p-shadow rouded-2xl   md:rounded-3xl overflow-hidden"
      >
        <img
          src={image}
          alt=""
          className="aspect-[6/3] hover:scale-110 transition-all duration-500"
        />
      </Link>
      {/* Description part */}
      <div
        className={`flex md:absolute  md:w-[55%] flex-col ${
          even ? "right-0 items-end" : "left-0 items-start"
        } `}
      >
        <p className=" font-medium text-sm text-[#3053c9]">{type}</p>
        <h3 className=" font-semibold -mt-1 mb-4 text-xl">{name}</h3>
        <div className="description p-5 text-end rounded-2xl bg-white">
          <p className="paragraph !text-sm text-justify">{description}</p>
        </div>
        <div className="flex mt-3 gap-3 flex-wrap">
          {technologies.map((t) => (
            <span
              key={t + name}
              className="px-2 text-[#222] hover:scale-110 transition-transform py-1 bg-[#f0f0f060] border-2 rounded-2xl text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <div className=" flex gap-4 mt-3 px-2">
          <a
            href=""
            target="_blank"
            className="font-poppins px-3 py-1 gap-2 rounded-full text-sm flex items-center bg-[#222] text-white "
          >
            <span>Preview</span>
            <IoEye className="text-white" />
          </a>
          <FaGithub className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard