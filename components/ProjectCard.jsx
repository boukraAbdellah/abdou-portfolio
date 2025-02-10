import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";


const ProjectCard = ({ project , index }) => {
  const { name, type, description, image, technologies } = project;
  let even = index % 2 === 0 ? true : false;
  
  return (
    <div
      className={`flex flex-col md:flex-row items-center relative my-6 md:my-28  w-full max-md:gap-4 ${
        even ? "justify-start " : "justify-end"
      }`}
    >
      {/* Image part j-e */}
      <Link
        href="/"
        className="max-md:order-2 md:w-[60%] w-full p-shadow rouded-2xl   md:rounded-3xl overflow-hidden"
      >
        <img
          src={image}
          alt=""
          className="aspect-[6/3] hover:scale-110 transition-all duration-500"
        />
      </Link>
      {/* Description part */}
      <div
        className={`flex max-md:!items-start md:absolute  md:w-[55%] flex-col ${
          even ? "right-0 items-end" : "left-0 items-start"
        } `}
      >
        <p className=" font-medium xl:text-base text-sm text-secondary">
          {type}
        </p>
        <h3 className=" font-semibold xl:text-2xl -mt-1 mb-4 text-xl">
          {name}
        </h3>
        <div className="description px-5 py-3 shadow-md text-end rounded-2xl bg-innerbg">
          <p className="paragraph xl:!text-base !text-sm text-justify">
            {description}
          </p>
        </div>
        <div className="flex mt-3 gap-3 flex-wrap">
          {technologies.map((t) => (
            <span
              key={t + name}
              className="px-2 text-foreground hover:scale-110 transition-transform py-1 bg-[#f0f0f060] dark:bg-outerbg border-2 dark:border-gray-500 rounded-2xl 2xl\:text-sm text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <div className=" flex gap-4 items-center mt-3 px-2">
          <a
            href=""
            target="_blank"
            className="font-poppins px-3 py-1 gap-2 rounded-full dark:border-gray-500 dark:border-2 xl:text-base text-sm flex items-center bg-[#222] text-white "
          >
            <span>Preview</span>
            <IoEye className="text-white " />
          </a>
          <a href="https://github.com/boukraAbdellah">
            <FaGithub className="text-2xl xl:text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard