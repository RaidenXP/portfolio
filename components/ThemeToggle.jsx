"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { GoMoon, GoSun } from "react-icons/go";

const ThemeToggle = ({ styles="" }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={styles}
    >
      {resolvedTheme === 'dark' ? <GoSun/> : <GoMoon/>}
    </button>
  )
}

export default ThemeToggle