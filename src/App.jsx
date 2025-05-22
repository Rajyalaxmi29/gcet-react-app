import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
    <h1>My online Shop</h1>
     </header>
     <hr/>
     <main>
    <h2>product</h2>
     </main>
     <hr/>
     <footer>
    @copy.write
     </footer>
    </>
  )
}

export default App
