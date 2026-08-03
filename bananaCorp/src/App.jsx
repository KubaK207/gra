import { useState, useReducer } from 'react'
import './App.css'
import { Header } from './Header'
import { Aside } from './Aside'
import { DarkModeComponent } from './DarkModeComponent'
import { ActiveTasks } from './ActiveTasks'
import { initialGame } from './initialGame'
import { Center } from './Center'
import { NameCompany } from './NameCompany'
import { gameReducer } from './gameReducer'

function App() {
  
  const [game, dispatch] = useReducer(gameReducer, initialGame)
  const [activeTasksList, setActiveTasksList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  
  return (
    <>
        <Header game={game} dispatch={dispatch} darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Aside setActivePanel={setActivePanel} darkMode={darkMode} setDarkMode={setDarkMode}/> 
          <Center activePanel={activePanel}
          setActivePanel={setActivePanel}
          game={game}
          dispatch={dispatch}
          activeTasksList={activeTasksList}
          setActiveTasksList={setActiveTasksList}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          />
        </main>
        <ActiveTasks activeTasksList={activeTasksList} setActiveTasksList={setActiveTasksList} dispatch={dispatch}/>

    </>
  )
}

export default App
