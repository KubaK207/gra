import { useState } from 'react'
import './App.css'
import { Header } from './Header'

function App() {
  const [game, setGame] = useState({
    bananas: 0,
    reputation: 0
  })
  return (
    <>
      <Header game={game} setGame={setGame}/>
    </>
  )
}

export default App
