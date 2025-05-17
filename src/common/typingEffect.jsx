import { useState, useEffect } from "react";

const TypingEffect = ({ text = "", speed = 100 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0); // reiniciar si cambia el texto

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{text.slice(0, index)}</span>;
};

export default TypingEffect;
