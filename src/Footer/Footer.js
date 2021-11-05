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
          <img className={styles.socialLogo} src={github} alt="github" />
          <img className={styles.socialLogo} src={linkedin} alt="linkedin" />
          <img className={styles.socialLogo} src={twitter} alt="twitter" />
        </div>
      </div>
    );
}


export default Footer ;