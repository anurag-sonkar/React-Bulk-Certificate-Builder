import React from "react";
import styles from "./Contact.module.css";
import contact from "../../Data/contact";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.header}>
        <Link
          to="#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <MdArrowUpward />
        </Link>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.leftContainer}>
          <div>Contact</div>
          <div>Feel free to reach out!</div>
        </div>
        <div className={styles.rightContainer}>
          {contact.map((data, index) => (
            <div className={styles.contact}>
              <img src={data.imgSrc} />
              <div>{data.linkSrc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
