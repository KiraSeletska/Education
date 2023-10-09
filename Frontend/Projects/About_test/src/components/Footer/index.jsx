import styles from "./footer.module.scss";
import jsImg from "../../images/icons_coding/logo-javascript.svg";
import tsImg from "../../images/icons_coding/typescript.svg";
import reactImg from "../../images/icons_coding/react-2.svg";
import reduxImg from "../../images/icons_coding/redux.svg";
import sassImg from "../../images/icons_coding/sass-1.svg";
import mobXImg from "../../images/icons_coding/mobx.svg";
import emailLogo from "../../images/icons/gmail-icon-2.svg"
import githubLogo from "../../images/icons/github-icon-1.svg"
import linkedinLogo from "../../images/icons/linkedin-icon-2.svg"
import phoneLogo from '../../images/icons/mobile-phone-1.svg'



export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <img src={jsImg} alt="Javascript" />
          <img src={tsImg} alt="Typescript" />
          <img src={reactImg} alt="React" />
          <img src={reduxImg} alt="Redux" />
          <img src={mobXImg} alt="MobX" />
          <img src={sassImg} alt="Sass" />
        </div>
        <div className={styles.center}><p>for something</p></div>
        <div className={styles.contacts}>
          <ul>
            <li>
              <a href="tel:+499999999999"><img src={phoneLogo} alt="Phone" /></a>
            </li>
            <li>
              <a href="mailto:seletskaya.kira@gmail.com"><img src={emailLogo} alt="Email"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kira-seletska/"><img src={linkedinLogo} alt="Linkedin" /></a>
            </li>
            <li>
              <a href="https://github.com/KiraSeletska"><img src={githubLogo} alt="GitHub" /> </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
