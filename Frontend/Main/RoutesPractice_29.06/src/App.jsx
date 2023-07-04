import { useState } from 'react'
import { Header } from './Layout/Header'
import { ThemeContext } from './contexts'
import { Outlet } from 'react-router-dom'
import { Form } from './components/Form'

function App() {
  const [theme, setTheme] = useState()
  const [logged, setLogged] = useState(false)

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} theme={theme} />
     { logged ? <Outlet/> : 
     
     <Form setLogged={setLogged}/>}
 
      </ThemeContext.Provider>
    </div>
  )
}

export default App
