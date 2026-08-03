import { useState } from "react";
import { Modal } from "./Modal";
import palma from "./assets/palma.png";
import { DarkModeComponent } from "./DarkModeComponent";
import { Market } from "./Market";
import sklep from "./assets/sklep.png";

export function Aside({setActivePanel, darkMode, setDarkMode}) {

    const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black",
        borderRight: `1px solid ${darkMode ? "#eeeeee" : "#252a34"}`
    };

    return(
        <>
            <aside style={styleMode}>
                <button className="palma" onClick={() => setActivePanel("modal")}><img src = {palma}></img></button>
                <button className="shop" onClick={() => setActivePanel("market")}><img src = {sklep}></img></button>
            </aside>
        
        </>
    );
}