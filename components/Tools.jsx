import Image from "next/image";
import React from "react";

const Tools = () => {
  const tools = [
    { src: "/js.png", alt: "Javascript" },
    { src: "/node-js.png", alt: "Node Js" },
    { src: "/icons8-typescript.svg", alt: "Typescript" },
    { src: "/icons8-next.js.svg", alt: "Next js" },
    { src: "/science.png", alt: "React" },
    { src: "/icons8-html-5.svg", alt: "Html 5" },
    { src: "/icons8-css3.svg", alt: "CSS" },
    { src: "/icons8-express-js.svg", alt: "Javascript" },
    { src: "/icons8-mongodb-144.png", alt: "Mongo" },
    { src: "/icons8-mysql-logo.svg", alt: "MySQL" },
    { src: "/icons8-tailwind-css.svg", alt: "Tailwindcss" },
    { src: "/icons8-git.svg", alt: "Git" },
  ];

  return (
    <section className="md:col-span-12 col-span-1 rounded-3xl p-10 my-10 bg-innerbg">
      <h2 className="title">Tools & Technologies</h2>
      <div className="flex lg:gap-10 gap-6  flex-wrap mt-6">
        {tools.map((tool, index) => (
          <Image
            key={index}
            className="hover:scale-110 transition-all cursor-pointer h-auto  max-md:max-w-[40px]"
            src={tool.src}
            alt={tool.alt}
            width={70}
            height={70}
          />
        ))}
      </div>
    </section>
  );
};

export default Tools;
