import classes from './header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = ({ theme, setTheme }) => (


    <header className={classes.headerContainer}>
    <button
      type="button"
      className={classes.toggleButton}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      TOGGLE
    </button>
    <nav>
      <ul>
        <li><NavLink to='/about'>1</NavLink></li>
        <li><NavLink to='/items'>2</NavLink></li>
        <li><NavLink to='/timer'>3</NavLink></li>
      </ul>
    </nav>
  </header>
  

)
