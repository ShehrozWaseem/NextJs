"use client"
import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import { themeCtx } from '@/context/ThemeContext'
import Image from 'next/image'
const ThemeToggle = () => { 
  const {theme,toggle} = useContext(themeCtx)
  console.log(theme)
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle