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
        <li><NavLink to='/about'
        className={({ isActive }) =>(isActive ? classes.active : '')}>About</NavLink></li>
        <li><NavLink to='/items'
        className={({ isActive }) => (isActive ? classes.active : '')} >Items</NavLink></li>
        <li><NavLink to='/timer'
         className={({ isActive }) =>(isActive ? classes.active : '')}>Timer</NavLink></li>
      </ul>
    </nav>
  </header>
  

)
