import styles from "./Activity.module.css";
import shape from "../../img/activityImg/shape.png";
import right from "../../img/contactsImg/right.png";
import left from "../../img/contactsImg/left.png";
import { useState } from "react";

const activitys = [
  {
    id: "01",
    description1: "3D Conception ",
    description2: "& Design",
  },
  {
    id: "02",
    description1: "Interaction ",
    description2: "Design",
  },
  {
    id: "03",
    description1: "VR World",
    description2: "User Testing",
  },
  {
    id: "04",
    description1: "Hydra VR ",
    description2: "Deploy",
  },
];

const Activity = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const prevActivity = () => {
    if (currentActivityIndex === 0) {
      setCurrentActivityIndex(activitys.length - 1);
    } else {
      setCurrentActivityIndex(currentActivityIndex - 1);
    }
  };
  const nextActivity = () => {
    if (currentActivityIndex === activitys.length - 1) {
      setCurrentActivityIndex(0);
    } else {
      setCurrentActivityIndex(currentActivityIndex + 1);
    }
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.itemDiv}>
            <div>
              <span>01</span>
            </div>
          </div>
          <div className={styles.imgSpanContainer}>
            <img src={shape} />
            <span>
              3D Conception
              <br /> & Design
            </span>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemDiv}>
            <div>
              <span>02</span>
            </div>
          </div>
          <div className={styles.imgSpanContainer}>
            <img src={shape} />
            <span>
              Interaction
              <br /> Design
            </span>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemDiv}>
            <div>
              <span>03</span>
            </div>
          </div>
          <div className={styles.imgSpanContainer}>
            <img src={shape} />
            <span>
              VR World
              <br /> User Testing
            </span>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemDiv}>
            <div>
              <span>04</span>
            </div>
          </div>
          <div className={styles.imgSpanContainer}>
            <img src={shape} />
            <span>
              Hydra VR
              <br /> Deploy
            </span>
          </div>
        </div>
      </div>
      <div className={styles.mediaContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.itemDiv}>
            <div>
              <span>{activitys[currentActivityIndex].id}</span>
            </div>
          </div>
          <div className={styles.imgSpanContainer}>
            <button onClick={prevActivity}>
              <img src={left} />
            </button>
            <div className={styles.spans}>
              <span>{activitys[currentActivityIndex].description1}</span>
              <span>{activitys[currentActivityIndex].description2}</span>
            </div>

            <button onClick={nextActivity}>
              <img src={right} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activity;
