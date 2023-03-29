import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
       <h1>Pokémon Card</h1>  
       <p>This is an exercice from Odyseey Wild Code School </p>
      </div>
      
      <p className="read-the-docs">
        Go to Odyseey Website for More information
      </p>
    </div>
  )
}

export default App
