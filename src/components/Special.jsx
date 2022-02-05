import styles from "../styles/Special.module.scss";

const Dishe = ({ name, price, description }) => {
  return (
    <div className={styles.disheContainer}>
      <div className={styles.dishe}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{`$${price}`}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

const Special = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Special Dieshes</h1>
        <h2>Best Recommendation Menu</h2>
      </div>
      <div className={styles.dishes}>
        <div className={styles.col1}>
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta cheese"
          />
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta cheese"
          />
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta cheese"
          />
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta cheese"
          />
        </div>
        <div className={styles.col1}>
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta cheese"
          />
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, barrel aged feta cheese"
          />
        </div>
      </div>
    </div>
  );
};

export default Special;
