import styles from "./PartnyorEcosystem.module.css";
import oculus from "../../img/partnyorsEcosystemImg/oculus.png";
import unity from "../../img/partnyorsEcosystemImg/unity.png";
import unreal from "../../img/partnyorsEcosystemImg/unreal.png";
import vive from "../../img/partnyorsEcosystemImg/vive.png";
import vector from "../../img/introductionImg/vector.png";
import shape from "../../img/introductionImg/shape.png";

const PartnyorEcosystemComp = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img src={unreal} />
        <img src={unity} />
        <img src={oculus} />
        <img src={vive} />
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.spanImgContainer}>
          <span>HOW WE BUILD</span>
          <div className={styles.imgContainer}>
            <span>WITH HYDRA VR?</span>
            <div className={styles.imgContainer2}>
              <img src={vector} />
              <img src={shape} />
            </div>
          </div>
        </div>
        <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat <br /> nibh sed pulvinar proin gravida hendrerit lectus.
          Mi sit amet mauris commodo
          <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit
          amet tellus. Ornare <br /> lectus sit amet est placerat in. Lectus
          magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
    </div>
  );
};

export default PartnyorEcosystemComp;
