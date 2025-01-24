"use client"

import { useState, useEffect } from "react";

export function useTypewriter(
  strings,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 2000
) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (currentText === currentString) {
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [
    currentStringIndex,
    currentText,
    isDeleting,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return currentText;
}

export default function Typewriter({
  strings,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
}) {
  const text = useTypewriter(strings, typingSpeed, deletingSpeed, pauseTime)

  return (
    <span className={className}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}

