import './center.css'
import { Modal } from './Modal'
import { DarkModeComponent } from './DarkModeComponent'
import { Header } from './Header'

export function Center({open, setOpen, game, setGame, activeTasksList, setActiveTasksList, darkMode, setDarkMode}) {
     const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black"
    };
    return(
        <>
            <section className="center" style={styleMode}>{open && (
                <Modal setOpen ={setOpen} game={game} setGame={setGame} activeTasksList={activeTasksList} setActiveTasksList={setActiveTasksList}/>
            )}
            </section>

        </>
    )
}