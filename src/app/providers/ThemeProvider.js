"use client"
import React, { useContext, useEffect, useState } from 'react'
import { themeCtx } from '../context/ThemeContext'

const ThemeProvider = ({children}) => {
    const {theme} = useContext(themeCtx)
    const [mounted,setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if(mounted){
        return (
            <div className={theme}>
                {children}
            </div>
          )
    }

}

export default ThemeProvider