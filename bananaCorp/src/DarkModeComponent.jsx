import { useState } from "react";
import './App.css'

export function DarkModeComponent({darkMode, setDarkMode}) {
    

return(
        <>
            <button className="themeButton" onClick={() => setDarkMode(prev => !prev)}>{darkMode ? "☀️" : "🌙"}</button>
        </>
    )
}