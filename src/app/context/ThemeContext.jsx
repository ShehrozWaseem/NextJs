"use client"
import { createContext, useState } from "react";

export const themeCtx = createContext();

const getThemeFromLocalStorage = () => {
    if(typeof window !== undefined){
        const value = localStorage?.getItem("theme");
        return value || "light"
    }
}


export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState(()=>{
        return getThemeFromLocalStorage()
    })
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
        localStorage.setItem(theme,theme === "light" ? "dark" : "light")
    }
    
    return <themeCtx.Provider value={{theme,toggle}}>{children}</themeCtx.Provider>
}