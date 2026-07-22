import { useState } from "react";
import { Modal } from "./Modal";
import palma from "./assets/palma.png";

export function Aside({setOpen}) {
    return(
        <>
            <aside>
                <button onClick={() => setOpen(true)}><img src= {palma}></img></button>
            </aside>
        
        </>
    );
}