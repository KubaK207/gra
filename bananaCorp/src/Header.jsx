import { DarkModeComponent } from "./DarkModeComponent";

export function Header({game, setDarkMode, darkMode}) {
    const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black"
    };
    return(
        <>
        <header style={styleMode}>

            <h4>Bananas {game.bananas}</h4>
            <h4>Reputation {game.reputation}</h4>
        
            <DarkModeComponent setDarkMode={setDarkMode} darkMode={darkMode}/>
        </header>
        </>
    );
}