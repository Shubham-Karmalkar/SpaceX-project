import styles from './Navbar.module.css';
import logo from "../Images/spacex_logo_white.png" ;
import { Link } from 'react-router-dom';


const NavBar = ()=>{
    console.log(logo);
    return (
      <div className={styles.navBarContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={logo} alt="logo" />
        </div>
        <div className={styles.containerForLinks}>
          <div>
            <Link className={styles.links} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={styles.links} to="/mission">
              Missions
            </Link>
          </div>
          <div>
            <Link className={styles.links} to="/bookmarks">
              Bookmarks
            </Link>
          </div>
          <div>
            <Link className={styles.links} to="/favourites">
              Favourites
            </Link>
          </div>
        </div>

        <div className={styles.menu}>
          <div className={styles.dropdown}>
            <i className="fas fa-bars"></i>
            <div className={styles.menuLinks}>
              <div>
                <Link className={styles.links} to="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className={styles.links} to="/mission">
                  Missions
                </Link>
              </div>
              <div>
                <Link className={styles.links} to="/bookmarks">
                  Bookmarks
                </Link>
              </div>
              <div>
                <Link className={styles.links} to="/favourites">
                  Favourites
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default NavBar ;