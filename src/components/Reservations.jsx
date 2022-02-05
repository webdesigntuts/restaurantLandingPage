import styles from "../styles/Reservations.module.scss";
import restaurant from "../assets/restaurant.jpg";
import { BsArrowRight } from "react-icons/bs";

const Reservations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* LEFT CONTAINER */}
        <div className={styles.leftContainer}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>Reservation</h1>
              <h2>Make a Romantic Atmosphere Here</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure
              tempore eius suscipit fugit nam?
            </p>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className={styles.rightContainer}>
          <div className={styles.formContainer}>
            <form action="">
              <div className={styles.imgContainer}>
                <img src={restaurant} alt="restaurant" />
              </div>
              <div className={styles.formInner}>
                <input type="name" className={styles.name} placeholder="Name" />
                <div className={styles.dateTime}>
                  <input type="date" className={styles.date} />
                  <input type="time" className={styles.time} />
                </div>
                <button>
                  <span>Book Now</span>
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
