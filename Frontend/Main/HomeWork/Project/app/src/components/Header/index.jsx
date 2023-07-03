import styles from './styles.module.css'
import logo from '../../images/logo.svg';
import shoppingBag from '../../images/shoppingbag.svg';

export const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" />
                <button>Каталог</button>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li><a href="#">Категории</a></li>
                    <li><a href="#">Купон</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#"><img src={shoppingBag} alt="
Basket" /></a></li>
                </ul>
            </nav>
        </header>
    )
}