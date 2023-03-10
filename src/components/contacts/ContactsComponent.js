import styles from "./Contacts.module.css";
import location from "../../img/contactsImg/location.png";
import message from "../../img/contactsImg/message.png";
import telephone from "../../img/contactsImg/telephone.png";
import vector from "../../img/contactsImg/vector.png";

const ContactsComponent = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.location}>
        <img src={location} />
        <div>
          <p className={styles.textP}>Pay Us a Visit</p>
          <p className={styles.text2}>
            Union St, Seattle, WA 98101, United States
          </p>
        </div>
      </div>
      <img src={vector} />
      <div className={styles.message}>
        <img src={telephone} />
        <div>
          <p className={styles.textP}>Give Us a Call</p>
          <p className={styles.text2}>(110) 1111-1010</p>
        </div>
      </div>
      <img src={vector} />
      <div className={styles.telephone}>
        <img src={message} />
        <div>
          <p className={styles.textP}>Send Us a Message</p>
          <p className={styles.text2}>Contact@HydraVTech.com</p>
        </div>
      </div>
    </div>
  );
};
export default ContactsComponent;
