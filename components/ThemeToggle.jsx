"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { GoMoon, GoSun } from "react-icons/go";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return null;
  }

  const toggleSwitch = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  };

  return (
    <>
      <div className={'toggle'} onClick={toggleSwitch}>
        <GoSun className="hidden dark:block ml-[10px]"/>
        <motion.div className="handle" layout transition={spring} />
        <GoMoon className="dark:hidden mr-[10px]"/>
      </div>
    </>
  )
}

export default ThemeToggle