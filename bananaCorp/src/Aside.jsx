import { useState } from "react";
import { Modal } from "./Modal";

export function Aside({game, setGame}) {
    const [open, setOpen] = useState(false);
    return(
        <>
            <aside>
                <button onClick={() => setOpen(true)}>banan</button>
            </aside>
    {
        open && 
            <Modal setOpen ={setOpen} game={game} setGame={setGame}/>
        
    }
    </>
);
}