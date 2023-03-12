import styles from "./Footer.module.css";
import style1 from "../../img/footerImg/style1.png";
import logo from "../../img/footerImg/logo.png";
import line1 from "../../img/footerImg/line1.png";
import line2 from "../../img/footerImg/line2.png";
import facebook from "../../img/footerImg/facebook.png";
import twitter from "../../img/footerImg/twitter.png";
import linkedin from "../../img/footerImg/linkedin.png";
import youtube from "../../img/footerImg/youtube.png";
import instagram from "../../img/footerImg/instagram.png";
import pinterest from "../../img/footerImg/pinterest.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <img src={logo} />
        <img src={line1} />
        <div className={styles.spanContainer1}>
          <span>ABOUT</span>
          <span>SERVICE</span>
          <span>TECHNOLOGIES</span>
          <span>HOW TO</span>
          <span>JOIN HYDRA</span>
        </div>
        <img src={line1} />
        <div className={styles.spanContainer2}>
          <span>F.A.Q</span>
          <span>SITEMAP</span>
          <span>CONDITIONS</span>
          <span>LICENSES</span>
        </div>
        <img src={line1} />
        <div className={styles.websites_container}>
          <div>SOCIALIZE WITH HYDRA</div>
          <div className={styles.images}>
            <img src={facebook} />
            <img src={twitter} />
            <img src={linkedin} />
            <img src={youtube} />
            <img src={instagram} />
            <img src={pinterest} />
          </div>
          <div>
            <a href="#!">BUILD YOUR WORLD</a>
          </div>
        </div>
      </div>
      <div className={styles.lastImg}>
        <img src={line2} />
      </div>
      <p className={styles.last_row}>
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
