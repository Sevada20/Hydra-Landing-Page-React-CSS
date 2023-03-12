import styles from "./ContactForm.module.css";
import line from "./line.png";
const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1>JOIN HYDRA</h1>
      <img src={line} />
      <h2>Let’s Build Your VR Experience</h2>
      <div className={styles.oneTwoInputcontainer}>
        <input
          placeholder="First Name"
          type="text"
          className={styles.input_Top}
        />
        <input
          placeholder="Last Name"
          type="text"
          className={styles.input_Top}
        />
      </div>
      <div className={styles.threeFourInputcontainer}>
        <input placeholder="Email" type="text" className={styles.input_Top} />
        <input
          placeholder="Phone Number"
          type="number"
          className={styles.input_Top}
        />
      </div>
      <div className={styles.fiveSixInputContainer}>
        <div>
          <input
            placeholder="Subject"
            type="text"
            className={styles.input_bottom1}
          />
        </div>
        <div>
          <input
            placeholder="Tell Us Something..."
            type="text"
            className={styles.input_bottom2}
          />
        </div>
      </div>
      <a href="#!">SEND TO HYDRA</a>
    </div>
  );
};

export default ContactForm;
