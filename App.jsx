import { useState } from 'react'
import Button from './components/Button'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button label= "Derecha"/>
     <Button label= "Arriba"/>
     <Button label= "Enfrente"/>
     <Button label= "Abajo"/>
    </>
  )
}

export default App
