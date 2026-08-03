import { Modal } from './Modal'
import { DarkModeComponent } from './DarkModeComponent'
import { Header } from './Header'
import { Market } from './Market'

export function Center({setActivePanel, activePanel, game, dispatch, activeTasksList, setActiveTasksList, darkMode, setDarkMode}) {
     const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black"
    };
    return(
        <>
            <section className="center" style={styleMode}>
                {activePanel === "market" && (
                <Market 
                    game={game}
                    dispatch={dispatch}
                    setActivePanel={setActivePanel}
                />
            )}

            {activePanel === "modal" && (
                <Modal
                    game={game}
                    dispatch={dispatch}
                    setActivePanel={setActivePanel}
                    setActiveTasksList={setActiveTasksList}
                />
            )}

            </section>

        </>
    )
}