"use client";

import Ocean from "@/components/Ocean"
import Wavetext from "@/components/Wavetext"
import AnimatedText from "@/components/AnimatedText"

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutFirstSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "305%"]);

  return (
    <section ref={ref} className="grid place-items-center relative overflow-hidden w-full md:h-[calc(100vh-70px)] h-[calc(100vh-102px)]">
      <motion.div
        style={{
          y: textY,
        }}
        className="z-10 mb-10"
      >
        <Wavetext 
          text="About Me"
          textStyle="text-7xl font-semibold"
        />
        <AnimatedText
          style="mt-8 text-lg"
        >
          Dive in and learn a little more about me
        </AnimatedText>
      </motion.div>
      <Ocean/>
    </section>
  )
}

export default AboutFirstSection