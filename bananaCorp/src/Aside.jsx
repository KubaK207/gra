import { useState } from "react";
import { Modal } from "./Modal";
import palma from "./assets/palma.png";
import { DarkModeComponent } from "./DarkModeComponent";

export function Aside({setOpen, darkMode, setDarkMode}) {

    const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black",
        borderRight: `1px solid ${darkMode ? "#eeeeee" : "#252a34"}`
    };

    return(
        <>
            <aside style={styleMode}>
                <button onClick={() => setOpen(true)}><img src= {palma}></img></button>
            </aside>
        
        </>
    );
}