import styles from "../styles/Specialities.module.scss";
import { ReactComponent as Western } from "../assets/food/western.svg";
import { ReactComponent as Eastern } from "../assets/food/eastern.svg";
import { ReactComponent as Japan } from "../assets/food/japan.svg";
import { ReactComponent as Korean } from "../assets/food/korean.svg";

const FoodCard = ({ foodIcon, ctg, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>{foodIcon}</div>
      <h2>{ctg}</h2>
      <p>{description}</p>
    </div>
  );
};

const Specialities = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Speacialities</h1>
        <h2>Our Special Cuisine</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.row1}>
          <FoodCard
            foodIcon={<Western />}
            ctg="Western"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nostrum autem, sit excepturi suscipit harum."
          />
          <FoodCard
            foodIcon={<Eastern />}
            ctg="Eastern"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nostrum autem, sit excepturi suscipit harum."
          />
        </div>

        <div className={styles.row2}>
          <FoodCard
            foodIcon={<Japan />}
            ctg="Japannese"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nostrum autem, sit excepturi suscipit harum."
          />

          <FoodCard
            foodIcon={<Korean />}
            ctg="Korean"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nostrum autem, sit excepturi suscipit harum."
          />
        </div>
      </div>
    </div>
  );
};

export default Specialities;
