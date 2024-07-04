import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";

function Contact() {
  const [contactUrls, setContactUrls] = useState([]);
  // console.log("ContactUrls : ", contactUrls);
  const contact = [
    {
      imgSrc: contactUrls[0],
      linkSrc: "mailto:varunyadav191101@gmail.com",
      displayText: "varunyadav191101@gmail.com"
    },
    {
      imgSrc: contactUrls[1],
      linkSrc: "https://www.linkedin.com/in/varun-yadav-25ab90302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      displayText: "LinkedIn"
    },
    {
      imgSrc: contactUrls[2],
      linkSrc: "https://github.com/varun191101",
      displayText: "GitHub"
    },
  ];
  async function fetchAllImages() {
    try {
      const imagesRefs = ref(storage, "rootImages/ContactImages");
      const imageList = await listAll(imagesRefs);

      const allUrls = imageList.items.map(async (imageRef) => {
        const url = await getDownloadURL(imageRef);
        return url;
      });
      const urls = await Promise.all(allUrls);
      setContactUrls(urls);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllImages();
  }, []);
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
            <div className={styles.contact} key={index}>
              <img src={data.imgSrc} />
              <div><a href={data.linkSrc} target="_blank">
                  {data.displayText}
                </a></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
