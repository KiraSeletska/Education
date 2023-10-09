import styles from './about.module.scss'

export const About = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.preface}>
                <section className={styles.prefDescr}>
                <h2>Preface</h2>
                <p>I worked in sales for more than 15 years. But due to recent events, I left my country. I was faced with the question: continue my career or start a new one, I chose the latter.
In my previous career, I achieved the following accomplishments; 
Won the title of the most productive manager 
Brought in and managed the largest deal in the history of the company 
Was named the most successful department, with the highest profit margin
Had the lowest staff turnover within my department. </p>
<p>But the time has come to make a new choice, and <br/><span>I chose IT </span></p>
                </section>
          <div className={styles.it}>
          <section className={styles.whyIt} >
<h2>Why IT?</h2>
<p >I believe it is the present and the future, with constant development, and continuous problem-solving opportunities. It's extremely interesting to me. After completing the training and practice, I was convinced that I had made the right choice 
</p>
</section>
<section className={styles.whyFront}><h2>Why FRONTEND DEVELOPMENT?</h2>
<p>I like Javascript, and its breadth of use, I like working with interfaces and quickly seeing the result of my work</p></section>
          </div>


            </div>
        </div>
    )
}