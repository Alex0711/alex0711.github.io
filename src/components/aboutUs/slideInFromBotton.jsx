import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SlideInFromBotton({ title, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mt-14"
    >
      <h3 className="text-subtitle">{title}</h3>
      <p> {text} </p>
    </motion.div>
  );
}
