import React from "react";
//Page Component
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../pages/animation";
import Scrolltop from "../components/ScrollTop";

function AboutUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
      <Scrolltop />
    </motion.div>
  );
}

export default AboutUs;
