"use client"
import React, { useState } from 'react'
import styles from './authLogin.module.css'
import Link from 'next/link'
const AuthLogin = () => {
  const [open,setOpen] = useState(false)
  const status = "notauth"
  return (
    <>
    {/* To display in normal view */}
      {status === "notauth" ? 
      <Link href='/login'>Login</Link>:
      <>
        <Link href="/write">Write</Link>
        <span>Logout</span>
      </>}
      {/* For mobile view */}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
    
  )
}

export default AuthLogin