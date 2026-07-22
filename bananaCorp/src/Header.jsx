import { DarkModeComponent } from "./DarkModeComponent";
import bananas from './assets/banana.png';

export function Header({game, setDarkMode, darkMode}) {
    const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black"
    };
    return(
        <header style={styleMode}>

            <div className="bananasClass">
                <img src={bananas} alt="kiść bananów"/>
                <h4> {game.finance.bananas}</h4>
            </div>
            <h4>Reputation {game.company.reputation}</h4>
        
            <DarkModeComponent setDarkMode={setDarkMode} darkMode={darkMode}/>
        </header>
    );
}