import styles from "../styles/Logos.module.scss";
import { ReactComponent as Logo1 } from "../assets/logos/logo1.svg";
import { ReactComponent as Logo2 } from "../assets/logos/logo2.svg";
import { ReactComponent as Logo3 } from "../assets/logos/logo3.svg";
import { ReactComponent as Logo4 } from "../assets/logos/logo4.svg";

const Logos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo1 />
        </div>
        <div className={styles.logo}>
          <Logo2 />
        </div>
        <div className={styles.logo}>
          <Logo3 />
        </div>
        <div className={styles.logo}>
          <Logo4 />
        </div>
      </div>
    </div>
  );
};

export default Logos;
