import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
    
        <div class="item">Aries</div>
        <div class="item">Taurus</div>
        <div class="item">Gemini</div>
        <div class="item">Cancer</div>
        <div class="item">Leo</div>
        <div class="item">Virgo</div>


        <div class="item">Libra</div>
        <div class="item">Scorpio</div>
        <div class="item">Sagittarius</div>
        <div class="item">Capricornus</div>
        <div class="item">Aquarius</div>
        <div class="item">Pisces</div>
      </div>
    </>
  )
}

 export default App
