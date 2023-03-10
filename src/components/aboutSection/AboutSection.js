import styles from "./About.module.css";
import about from "../../img/aboutImg/about.png";
import vector from "../../img/introductionImg/vector.png";
import shape from "../../img/introductionImg/shape.png";
const AboutSection = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.leftContainer}>
        <img src={about} />
        <div className={styles.span_imagesContainer}>
          <span className={styles.rotate}>WHY BUILD</span>
          <div className={styles.spanImages}>
            <span className={styles.spanWithHydra}>WITH HYDRA?</span>
            <div className={styles.imagesContainer}>
              <img src={vector} />
              <img src={shape} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>ABOUT</h2>
        <h3>HYDRA VR</h3>
        <p>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </p>
        <div className={styles.linkDiv}>
          <a href="#!">LET’S GET IN TOUCH</a>
        </div>
        <p className={styles.bottomP}>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
