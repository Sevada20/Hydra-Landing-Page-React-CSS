import styles from "./TechnoHardware.module.css";
import production from "../../img/technologies&Hardware/productions.png";
import vector from "../../img/technologies&Hardware/shape.png";
function TechnoHardware() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgWithContainer}>
        <div className={styles.headerContainer}>
          <h2>TECHNOLOGIES & HARDWARE</h2>
          <h3>USED BY HYDRA VR.</h3>
        </div>
      </div>
      <div className={styles.imgDiv}>
        <a href="#!">
          <img src={vector} />
        </a>
      </div>
    </div>
  );
}
export default TechnoHardware;
