import styles from "./Cards.module.css";
import maeder from "../../img/cardsImg/maeder.png";
import nilov from "../../img/cardsImg/nilov.png";
import productions from "../../img/cardsImg/productions.png";
import shvets from "../../img/cardsImg/shvets.png";
import right from "../../img/contactsImg/right.png";
import left from "../../img/contactsImg/left.png";
import { useState } from "react";
const cards = [
  {
    id: 1,
    image: shvets,
    description: "SIMULATION",
  },
  {
    id: 2,
    image: nilov,
    description: "EDUCATION",
  },
  {
    id: 3,
    image: productions,
    description: "SELF_CARE",
  },
  {
    id: 4,
    image: maeder,
    description: "OUTDOOR",
  },
];

const Cards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const prevCard = () => {
    if (currentCardIndex === 0) {
      setCurrentCardIndex(cards.length - 1);
    } else {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };
  const nextCard = () => {
    if (currentCardIndex === cards.length - 1) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div>
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

      <div className={styles.media_container}>
        <button onClick={prevCard}>
          <img src={left} />
        </button>
        <div className={styles.simulation}>
          <div className={styles.imgDiv}>
            <img src={cards[currentCardIndex].image} />
          </div>
          <h2>{cards[currentCardIndex].description}</h2>
          <p>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <div className={styles.link}>
            <a href="#!">TRY IT NOW</a>
          </div>
        </div>
        <button onClick={nextCard}>
          <img src={right} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
