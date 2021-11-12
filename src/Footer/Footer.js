import styles from './Footer.module.css'
import logo from "../Images/spacex_logo_white.png";
import github from "../Images/github.png" ;
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
const Footer = ()=>{

    return (
      <div className={styles.footerContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={logo} alt="logo" />
          @2021 all rights reserved
        </div>

        <div className={styles.socialMedia}>
          <a href={"https://github.com/Shubham-Karmalkar"} target="_blank">
            <img className={styles.socialLogo} src={github} alt="github" />
          </a>
          <a
            href={"https://www.linkedin.com/in/shubham-karmalkar-20245218b/"}
            target="_blank"
          >
            <img className={styles.socialLogo} src={linkedin} alt="linkedin" />
          </a>
          <a href={"https://github.com/Shubham-Karmalkar"} target="_blank">
            <img className={styles.socialLogo} src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    );
}


export default Footer ;