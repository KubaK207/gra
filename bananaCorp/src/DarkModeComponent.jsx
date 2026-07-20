import App from "./App";
export function DarkModeComponent({darkMode, setDarkMode}) {
    
return(
        <>
            <button onClick={() => setDarkMode(prev => !prev)}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
        </>
    )
}