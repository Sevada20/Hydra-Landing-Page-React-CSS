import styles from "./Header.module.css";
import group from "../../img/headerImg/Group.png";
import vector from "../../img/headerImg/Vector.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerImages}>
        <img src={vector} className={styles.vector} />
        <img src={group} className={styles.group} />
      </div>
      <div className={styles.linkContainer}>
        <a href="#!" className={styles.styled_link}>
          ABOUT
        </a>
        <a href="#!" className={styles.styled_link}>
          SERVICES
        </a>
        <a href="#!" className={styles.styled_link}>
          TECHNOLOGIES
        </a>
        <a href="#!" className={styles.styled_link}>
          HOW TO
        </a>
      </div>
      <div className={styles.headerContactContainer}>
        <div className={styles.headerContact}>
          <a href="#!">CONTACT US</a>
        </div>
        <div className={styles.joinHydra}>
          <a href="#!">JOIN HYDRA</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
