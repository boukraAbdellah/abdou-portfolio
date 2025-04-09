"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Mode = () => {
  const [isMoon, setIsMoon] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMoon(!isMoon);
      setIsAnimating(false);
      setTheme(theme === "light" ? "dark" : "light");
    }, 300); // Duration of the animation
  };

  return (
    <button
      className="fixed hidden  bottom-8 right-8 border-2 cursor-pointer w-16 h-16 bg-gray-800 rounded-full z-50 sm:flex justify-center items-center"
      onClick={handleClick}
    >
      <div
        className={`transition-transform duration-300 ${
          isAnimating ? "transform scale-0" : ""
        }`}
      >
        {isMoon ? (
          <Image src="/moon.png" alt="moon" width={38} height={38} />
        ) : (
          <Image src="/sunny.png" alt="sun" width={38} height={38} />
        )}
      </div>
    </button>
  );
};

export default Mode;
