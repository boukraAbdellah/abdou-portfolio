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
    <section className="font-poppins w-full hero h-[100vh] ">
      <div className=" lg:!px-40 md:px-32 px-12 xl:p-0 xl:max-w-7xl xl:mx-auto h-full flex items-center">
        <div>
          <p className=" text-2xl text-secondary font-medium ">
            Welcome to my portfolio 👋
          </p>
          <h1 className="xl:text-6xl md:text-5xl text-4xl font-semibold my-5">
            Boukra Bettayeb Abdellah
          </h1>
          <Typewriter
            strings={strings}
            className="font-poppins  font-medium text-3xl "
            typingSpeed={40}
            deletingSpeed={30}
          />
          <p className="paragraph mt-2 mb-5 !text-lg font-poppins">
            I like building things on the internet.
          </p>
          <a
            href="#about"
            className="btn-primary !bg-secondary text-[#f4f4f4] dark:text-outerbg font-poppins font-medium"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero
