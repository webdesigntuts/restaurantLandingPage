import styles from "../styles/AboutUs.module.scss";
import bg1 from "../assets/bg1.jpg";
import restaurant from "../assets/restaurant.jpg";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg1}>
        <img src={bg1} alt="bg1" />
      </div>
      <div className={styles.restaurant}>
        <img src={restaurant} alt="restaurant" />
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <h3>We always Server You Better</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            soluta laudantium praesentium? Excepturi non aperiam odit
            asperiores, ut saepe illum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
