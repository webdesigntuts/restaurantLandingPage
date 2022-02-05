import styles from "../styles/Footer.module.scss";
import { FaInstagramSquare, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>Food</span>
          <span className={styles.copyright}>
            © Copyright Food. All rights reserved
          </span>
        </div>

        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li className={styles.socialsContainer}>
            Get in Touch
            <ul className={styles.socials}>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
