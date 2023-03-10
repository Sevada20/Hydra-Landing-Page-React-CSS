import styles from "./ProductSection.module.css";
import pexels from "../../img/productSectionImg/pexels.png";
import shape from "../../img/productSectionImg/shape.png";

const ProductSectionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textLeftContainer}>
        <div className={styles.headerTextDiv}>
          <p className={styles.headerText}>
            <span className={styles.textDive}>Dive</span> Into The Depths
            <br /> Of <span className={styles.virtual}>Virtual Reality</span>
          </p>
        </div>
        <p className={styles.textLorem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />{" "}
          nisl tincidunt eget. Lectus mauris eros in vitae .
        </p>
        <div className={styles.textShape}>
          <div className={styles.textShapeDiv}>
            <a href="#!">BUILD YOUR WORLD</a>
          </div>
          <a href="#!">
            <img src={shape} />
          </a>
        </div>
      </div>
      <div className={styles.imgRight}>
        <img className={styles.img} src={pexels} />
      </div>
    </div>
  );
};

export default ProductSectionComponent;
