import './center.css'
import { Modal } from './Modal'

export function Center({open, setOpen, game, setGame, activeTasksList, setActiveTasksList}) {
    return(
        <>
            <section className="center">{open && (
                <Modal setOpen ={setOpen} game={game} setGame={setGame} activeTasksList={activeTasksList} setActiveTasksList={setActiveTasksList}/>
            )}
            </section>
        </>
    )
}