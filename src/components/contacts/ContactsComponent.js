import styles from "./Contacts.module.css";
import location from "../../img/contactsImg/location.png";
import message from "../../img/contactsImg/message.png";
import telephone from "../../img/contactsImg/telephone.png";
import vector from "../../img/contactsImg/vector.png";
import right from "../../img/contactsImg/right.png";
import left from "../../img/contactsImg/left.png";
import { useState } from "react";

const ContactsComponent = () => {
  const contacts = [
    {
      id: 1,
      image: location,
      description: "Pay Us a Visit",
      content: "Union St, Seattle, WA 98101, United States",
    },
    {
      id: 2,
      image: message,
      description: "Give Us a Call",
      content: "(110) 1111-1010",
    },
    {
      id: 3,
      image: telephone,
      description: "Send Us a Message",
      content: "Contact@HydraVTech.com",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage === contacts.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(contacts.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div>
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

      <div className={styles.slider}>
        <div className={styles.location}>
          <button onClick={prevImage}>
            <img src={left} />
          </button>
          <img src={contacts[currentImage].image} />
          <div>
            <p className={styles.textP}>{contacts[currentImage].description}</p>
          </div>
        </div>
        <button onClick={nextImage}>
          <img src={right} />
        </button>
      </div>
    </div>
  );
};
export default ContactsComponent;
