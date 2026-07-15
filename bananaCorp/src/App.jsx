import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Aside } from './Aside'

function App() {
  const [game, setGame] = useState({
    bananas: 1000,
    reputation: 0,
    tasks: [
      { id: 1, name: "Zadanie 1", cost: 100, bananasToEarn: 250, reputationToEarn: 2 },
      { id: 2, name: "Zadanie 2", cost: 150, bananasToEarn: 400, reputationToEarn: 3 },
      { id: 3, name: "Zadanie 3", cost: 220, bananasToEarn: 650, reputationToEarn: 5 },
      { id: 4, name: "Zadanie 4", cost: 300, bananasToEarn: 950, reputationToEarn: 8 },
      { id: 5, name: "Zadanie 5", cost: 400, bananasToEarn: 1400, reputationToEarn: 12 },
    ]
  })
  return (
    <>
      <Header game={game} setGame={setGame}/>
      <main>
        <Aside game={game} setGame={setGame} /> 
      </main>
    </>
  )
}

export default App
