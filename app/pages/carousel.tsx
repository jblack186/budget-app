import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Welcome from './welcome';
import { Header } from '../components/Header/Header';
import { motion } from "framer-motion";


const CarouselComponent = () => {

  return (
    <div>
      <Header />

      <motion.section
        animate={{
          y: ['-1000px', '0px'],
          type: "tween",

        }}
        transition={{ duration: .5 }}

      >
        <Welcome />
      </motion.section>
    </div>
  );
}

export default CarouselComponent;