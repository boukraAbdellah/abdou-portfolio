"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Tools = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const tools = [
    { src: "/js.png", alt: "Javascript" },
    { src: "/node-js.png", alt: "Node Js" },
    { src: "/icons8-typescript.svg", alt: "Typescript" },
    { src: "/icons8-next.js.svg", alt: "Next js" },
    { src: "/science.png", alt: "React" },
    { src: "/icons8-html-5.svg", alt: "Html 5" },
    { src: "/icons8-css3.svg", alt: "CSS" },
    { src: "/icons8-express-js.svg", alt: "Express" },
    { src: "/icons8-mongodb-144.png", alt: "Mongo" },
    { src: "/icons8-mysql-logo.svg", alt: "MySQL" },
    { src: "/icons8-tailwind-css.svg", alt: "Tailwindcss" },
    { src: "/icons8-git.svg", alt: "Git" },
    {src: "/icons8-docker.svg", alt: "Docker" },
    {src: "/icons8-spring-boot.svg", alt: "spring boot" },
  ];

  const handleMouseEnter = (event, alt) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: alt,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const handleMouseMove = (event) => {
    if (tooltip.visible) {
      setTooltip({
        ...tooltip,
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  return (
    <section className="md:col-span-12 col-span-1 rounded-3xl  p-6 sm:p-10  my-10 bg-innerbg relative">
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tools & Technologies
      </motion.h2>
      <motion.div
        className="flex lg:gap-10 gap-6 flex-wrap mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="relative"
            onMouseEnter={(e) => handleMouseEnter(e, tool.alt)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="hover:scale-110 transition-all cursor-pointer h-auto max-md:max-w-[40px]"
              src={tool.src || "/placeholder.svg"}
              alt={tool.alt}
              width={70}
              height={70}
            />
          </motion.div>
        ))}
      </motion.div>
      {tooltip.visible && (
        <motion.div
          className="fixed bg-black text-white px-3 py-1 rounded-lg text-sm pointer-events-none transition-opacity duration-300"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y + 20}px`,
            transform: "translate(-50%, 0)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {tooltip.text}
        </motion.div>
      )}
    </section>
  );
};

export default Tools;
