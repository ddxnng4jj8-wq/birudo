import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fruits = ["りんご", "ばなな", "ぶどう", "みかん", "もも"];
  const myFavorite = "みかん";
  
  return (
    <>
      <ul>
        {fruits.map( (fruit, index) => (
          <li key={index}>
            {fruit === myFavorite ? <strong>{fruit}</strong> : fruit}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App