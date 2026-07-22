import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Aside } from './Aside'
import { DarkModeComponent } from './DarkModeComponent'
import { ActiveTasks } from './ActiveTasks'
import './activeTasks.css'
import { initialGame } from './initialGame'
import { Center } from './Center'
import './center.css'

function App() {
  
  const [game, setGame] = useState(initialGame)
  const [activeTasksList, setActiveTasksList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header game={game} setGame={setGame} darkMode={darkMode} setDarkMode={setDarkMode} activeTasksList={activeTasksList} setActiveTasksList={setActiveTasksList}/>
      <main>
        <Aside setOpen={setOpen}/> 
        <Center open={open}
        setOpen={setOpen}
        game={game}
        setGame={setGame}
        activeTasksList={activeTasksList}
        setActiveTasksList={setActiveTasksList}/>
      </main>
      <ActiveTasks activeTasksList={activeTasksList} setActiveTasksList={setActiveTasksList} setGame={setGame}/>
      
    </>
  )
}

export default App
