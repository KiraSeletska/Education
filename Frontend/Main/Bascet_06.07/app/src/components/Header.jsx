import { NavLink } from 'react-router-dom'
import classes from './header.module.css'

export const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <nav>
        <ul>
          <li>
            <NavLink to="/categories">Категории</NavLink>
          </li>
          <li>
            <NavLink to="/basket">Корзина</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
