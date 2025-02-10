import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";


const Floating = () => {
  return (
    <div className="lg:block hidden left-0 w-[10%]  h-[100vh] fixed ">
      <div className="w-full h-full relative">
        <div className="  absolute bottom-0 right-2">
          <div className=" flex-col  flex items-center mt-2 ml-5 justify-start gap-3 text-[#525662] dark:text-[#9296a2]">
            <Link
              href={"https://github.com/boukraAbdellah"}
              className="duration-500 transition-all border-[3px] hover:-translate-y-2 hover:!text-[#111] hover:border-[#111] border-[#525662] dark:border-[#9296a2] dark:hover:!text-secondary dark:hover:border-secondary p-1.5  rounded-full w-8 h-8 flex-center"
            >
              <FaGithub className=" block h-5  w-5 text-gray" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/abdellah-boukra-bettayeb-70b78514b/"
              }
              className="duration-500 transition-all border-[3px] hover:-translate-y-2 hover:!text-[#111] hover:border-[#111] border-[#525662] dark:border-[#9296a2] dark:hover:!text-secondary dark:hover:border-secondary p-1.5  rounded-full w-8 h-8 flex-center"
            >
              <FaLinkedinIn className=" block h-5  w-5 text-gray" />
            </Link>
            <Link
              href={"https://www.instagram.com/b.b.abdellah/"}
              className="duration-500 transition-all border-[3px] hover:-translate-y-2 hover:!text-[#111] hover:border-[#111] border-[#525662] dark:border-[#9296a2] dark:hover:!text-secondary dark:hover:border-secondary p-1.5  rounded-full w-8 h-8 flex-center"
            >
              <FaInstagram className=" block h-5  w-5 text-gray" />
            </Link>
            <div className="w-[3px] rounded-lg h-32 bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floating