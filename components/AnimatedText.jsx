"use client";

import { easeIn, motion } from "framer-motion";

const AnimatedText = ({ children, style="" }) => {
  return (
    <motion.div
      className={style}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition:{
          duration: 0.7,
          delay: 1.3,
          ease: easeIn,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText