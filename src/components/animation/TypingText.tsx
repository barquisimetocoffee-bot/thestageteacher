import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]); // Reset when text changes

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <>
      {displayedText}
      <span className="border-r-2 border-black animate-pulse"></span>
    </>
  );
};

export default TypingEffect;
