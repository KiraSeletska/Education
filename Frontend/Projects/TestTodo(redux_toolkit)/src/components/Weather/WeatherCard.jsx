import styles from './Card.module.scss'

export const WeatherCard = ({main, description, icon, temp, date }) => {

    const newDate = date.split(' ').shift().split('-').reverse().join('.')

    return(
    <div className={styles.wrapper}>
        <p className={styles.date}>{newDate}</p>
        <p className={styles.main}>{main}</p>
        <p className={styles.temp}><span>{Math.round(temp)} </span>C°</p>
        <p className={styles.description}>{description}</p>
        {icon && <img src={icon} alt="" />}
    </div>
)
}