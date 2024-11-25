import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Calculator } from './components/Calculator'
// Se debe poner afuera para garantizar que no se-crea cada vez que se renderiza el componente
const themes = ['theme1', 'theme2', 'theme3']
function App () {
  const [currentTheme, setTheme] = useState(0)
  // Se puede poner dentro de "changeTheme" pero es mejor practica utilizar useEffect
  useEffect(() => {
    document.body.classList = themes[currentTheme]
  }, [currentTheme])
  
  function changeTheme () {
    const themeIndex = (currentTheme + 1) % themes.length
    setTheme(themeIndex)
  }

  // En React, no puedes manipular directamente el body o cualquier otro elemento fuera del árbol de componentes de React de manera declarativa
  return (
      <main className='me-12 ms-12 flex max-w-[80%] flex-col gap-4'>
        <Header currentTheme={currentTheme} onThemeChange={changeTheme} />
        <Calculator/>
      </main>
    
  )
}

export default App
