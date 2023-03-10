import React from "react";
import styles from "./Introduction.module.css";
import shape from "../../img/introductionImg/shape.png";
import vector from "../../img/introductionImg/vector.png";
const Introduction = () => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.leftSection}>
        <span className={styles.span1}>INTRODUCTION</span>
        <div className={styles.shapeVectorContainer}>
          <span className={styles.span2}>TO HYDRA VR</span>
          <div className={styles.imgContainer}>
            <img src={vector} />
            <img src={shape} />
          </div>
        </div>
      </div>
      <div className={styles.textP}>
        <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat
          <br /> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
          mauris commodo
          <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit
          amet tellus. Ornare
          <br /> lectus sit amet est placerat in. Lectus magna fringilla urna
          porttitor rhoncus vitae.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
