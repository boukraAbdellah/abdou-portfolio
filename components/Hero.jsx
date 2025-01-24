import React from 'react'
import Typewriter from './Typewriter';

const Hero = () => {
  const strings = [
    "I'm a developer.",
    "Freelancer",
    "Web Developer",
    "Frontend & Backend",
  ];
  return (
    <section className="font-poppins hero h-[100vh] ">
      <div className=" section icontainer h-full flex items-center">
        <div>
          <p className="text-blue-800 text-2xl font-medium ">
            Welcome to my portfolio 👋
          </p>
          <h1 className="text-6xl font-semibold my-5">
            Boukra Bettayeb Abdellah
          </h1>
          <Typewriter
            strings={strings}
            className="font-giest font-medium text-3xl "
            typingSpeed={40}
            deletingSpeed={30}
          />
          <p className="paragraph !text-lg my-3 font-poppins">
            I like building and breaking things on the internet.
          </p>
          <a href='#about' className="btn-primary text-[#f4f4f4] font-poppins font-medium">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero
