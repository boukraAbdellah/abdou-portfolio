"use client"
import React, { useEffect, useRef } from 'react'
import {motion} from 'motion/react'

const Hero = () => {
  

  const terminalRef = useRef(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const lines = [
      { text: "Hello World! I'm Abdellah.", delay: 500 },
      { text: "Fullstack Developer & Problem Solver", delay: 1500 },
      { text: "Specialized in React, Next.js, Node.js", delay: 2500 },
      { text: "Let's build something great together!", delay: 3500 },
    ];

    let currentLine = 0;
    let currentChar = 0;
    let outputElement= null;
    let cursorElement = null;

    const initTerminal = () => {
      if (!terminalRef.current) return;

      terminalRef.current.innerHTML = `
        <div class="flex items-center gap-2 px-4 py-2 bg-[#1e293b] rounded-t-lg border-b border-gray-700">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <div class="ml-2 text-xs text-gray-400">abdellah@portfolio ~ </div>
        </div>
        <div class="p-4 font-mono text-sm md:text-base">
          <p class="flex items-center">
            <span class="text-[#4ade80] mr-2">$</span>
            <span class="output text-white"></span>
            <span class="cursor inline-block w-2 h-4 md:h-5 bg-[#4ade80] ml-1"></span>
          </p>
        </div>
      `;

      outputElement = terminalRef.current.querySelector(".output");
      cursorElement = terminalRef.current.querySelector(".cursor");

      startTyping();
    };

    const startTyping = () => {
      if (currentLine >= lines.length) return;

      const line = lines[currentLine];

      setTimeout(() => {
        typeWriter(line.text);
      }, line.delay);
    };

    const typeWriter = (text) => {
      if (currentChar < text.length) {
        if (outputElement) {
          outputElement.textContent += text.charAt(currentChar);
        }
        currentChar++;
        setTimeout(() => typeWriter(text), 50 + Math.random() * 50);
      } else {
        currentLine++;
        currentChar = 0;

        if (currentLine < lines.length) {
          setTimeout(() => {
            if (outputElement) {
              outputElement.textContent = "";
            }
            startTyping();
          }, 1000);
        }
      }
    };

    // Start cursor blinking
    let cursorVisible = true;
    const cursorBlink = setInterval(() => {
      if (cursorElement) {
        cursorVisible = !cursorVisible;
        cursorElement.style.opacity = cursorVisible ? "1" : "0";
      }
    }, 500);

    initTerminal();

    return () => {
      clearInterval(cursorBlink);
    };
  }, []);
  
  return (
    <section className="font-poppins w-full  h-[100dvh] ">
      <div className="absolute inset-0 overflow-hidden h-full bg-outerbg !-z-30 pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[70%] rounded-full bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[40%] h-[70%] rounded-full bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl" />
      </div>
      <div className=" lg:!px-40 md:px-32 px-6 xl:p-0 xl:max-w-7xl xl:mx-auto max-md:h-[100vh] max-md:justify-center max-md:gap-6 h-full max-md:flex-col  flex items-center">
        <div className="md:flex-1">
          <p className=" text-2xl max-md:text-xl text-secondary font-medium ">
            Welcome to my portfolio 👋
          </p>
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-semibold my-2 md:my-5">
            Abdellah Boukra
          </h1>

          <p className="paragraph  mb-5 !text-lg font-poppins">
            I design and build clean, modern websites that bring your ideas to
            life. Whether you need a portfolio, business site, or custom
            solution — I'm here to make it happen.
          </p>
          <div className="flex gap-3 items-center">
            <a
              href="#contact"
              className="md:py-2 md:px-4 py-1 flex gap-3 items-center px-2 rounded-full !bg-secondary text-[#f4f4f4] dark:text-outerbg  font-poppins font-medium"
            >
              Contact Me
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse "></div>
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:flex-1 lg:order-2 md:ml-20 flex h-fit justify-center"
        >
          <div className="relative max-w-md h-fit w-full">
            <div
              ref={terminalRef}
              className="w-full bg-[#0f172a] rounded-lg border border-[#334155] shadow-[0_0_30px_rgba(56,189,248,0.15)] overflow-hidden"
            >
              {/* Terminal content will be injected by JavaScript */}
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8] blur-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-[#4ade80] to-[#818cf8] blur-2xl opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero
