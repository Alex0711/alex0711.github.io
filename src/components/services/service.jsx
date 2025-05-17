import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Service = ({ service }) => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-50px" });
  console.log("isInView: ", isInView);
  return (
    <div ref={lineRef} className="flex flex-col lg:w-[45%]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
        <h3 className="text-subtitle">{service.name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{service.comment}</p>
      </div>
      <motion.div
        className="h-px w-full bg-gray-600 dark:bg-gray-400"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <p className="">{service.description}</p>
    </div>
  );
};
export default Service;
