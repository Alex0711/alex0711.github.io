import React from "react";
import SlideInFromBotton from "components/aboutUs/slideInFromBotton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgImage from "assets/images/personas_2.png";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    threshold: 0.2,
  });
  return (
    <section
      className="flex flex-col lg:flex-row justify-between h-[200vh] lg:h-screen bg-cover bg-center flex-grow"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-1/2 lg:h-[100%] w-full lg:w-[45%] flex flex-col custom-shadow rounded-2xl p-6 zoom-hover">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-title">About Us</h2>
          <p>
            Driven by passion and curiosity, we continuously explore new
            technologies to find smarter, more effective ways to deliver the
            best solutions for our clients.
          </p>
        </motion.div>
        <div>
          <SlideInFromBotton
            title="Our Vision"
            text="To merge creativity and functionality to help our clients stand out online and become the first choice for their customers."
          />
          <SlideInFromBotton
            title="Our Mission"
            text="To drive online growth for businesses, enabling them to reach and engage the customers who matter most."
          ></SlideInFromBotton>
        </div>
      </div>
      <div className="w-[100%] h-[100vh] lg:w-[50%] lg:h-[100%] custom-shadow rounded-2xl mt-6 lg:mt-0 zoom-hover">
        <div
          className="w-full h-full bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </section>
  );
};

export default AboutUs;
