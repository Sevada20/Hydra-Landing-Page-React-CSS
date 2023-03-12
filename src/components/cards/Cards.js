import styles from "./Cards.module.css";
import maeder from "../../img/cardsImg/maeder.png";
import nilov from "../../img/cardsImg/nilov.png";
import productions from "../../img/cardsImg/productions.png";
import shvets from "../../img/cardsImg/shvets.png";

const Cards = () => {
  return (
    <div className={styles.cards_container}>
      <div className={styles.simulation}>
        <div className={styles.imgDiv}>
          <img src={shvets} />
        </div>
        <h2>SIMULATION</h2>
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <div className={styles.link}>
          <a href="#!">TRY IT NOW</a>
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.imgDiv}>
          <img src={nilov} />
        </div>
        <h2>EDUCATION</h2>
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <div className={styles.link}>
          <a href="#!">TRY IT NOW</a>
        </div>
      </div>
      <div className={styles.self_care}>
        <div className={styles.imgDiv}>
          <img src={productions} />
        </div>
        <h2>SELF_CARE</h2>
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <div className={styles.link}>
          <a href="#!">TRY IT NOW</a>
        </div>
      </div>
      <div className={styles.outdoor}>
        <div className={styles.imgDiv}>
          <img src={maeder} />
        </div>
        <h2>OUTDOOR</h2>
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <div className={styles.link}>
          <a href="#!">TRY IT NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
