import { useState } from "react";
import { Modal } from "./Modal";
import palma from "./assets/palma.png";
import { DarkModeComponent } from "./DarkModeComponent";

export function Aside({setOpen, darkMode, setDarkMode}) {

    const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black"
    };

    return(
        <>
            <aside style={styleMode}>
                <button onClick={() => setOpen(true)}><img src= {palma}></img></button>
            </aside>
        
        </>
    );
}