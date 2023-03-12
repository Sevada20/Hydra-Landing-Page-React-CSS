import styles from "./Activity.module.css";
import shape from "../../img/activityImg/shape.png";

const Activity = () => {
  return (
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
  );
};
export default Activity;
