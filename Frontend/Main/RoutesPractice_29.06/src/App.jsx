import { useState } from 'react'
import { Header } from './Layout/Header'
import { ThemeContext } from './contexts'
import { Outlet } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState()
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} theme={theme} />
        <Outlet/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
