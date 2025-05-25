import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Brand from "./brand";
import ContactForm from "./contactForm";

const Footer = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-50px" });
  return (
    <footer className="p-6">
      <div className="flex flex-col lg:flex-row justify-between bg-primary p-6 rounded-2xl custom-shadow">
        <Brand />
        <motion.div
          className="h-px w-full bg-gray-600 dark:bg-gray-400 mt-4 mb-4 lg:hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <ContactForm lineRef={lineRef} />
      </div>
    </footer>
  );
};

export default Footer;
