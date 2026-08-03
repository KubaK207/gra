import { DarkModeComponent } from "./DarkModeComponent";
import bananas from './assets/banana.png';

export function Header({game, setDarkMode, darkMode}) {
     const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black",
        borderBottom: `1px solid ${darkMode ? "#eeeeee" : "#252a34"}`
    };
    const repstyle = {
        color: game.company.reputation > 0 ? "lime" : "red",
        textShadow: `
        -1px -1px 0 black,
         1px -1px 0 black,
        -1px  1px 0 black,
         1px  1px 0 black
    `
    };
    return(
        <header style={styleMode}>
            <div className="headerLeft">

                <div className="bananasClass">
                    <img src={bananas} alt="kiść bananów"/>
                    <h4> {game.finance.bananas}</h4>
                
                </div>
                <h4 style={repstyle}>Reputation: {game.company.reputation}</h4>
            </div>
            
            <DarkModeComponent setDarkMode={setDarkMode} darkMode={darkMode}/>

        </header>
    );
}