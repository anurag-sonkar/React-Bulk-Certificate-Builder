import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import github from "../../assets/images/image 14.png"
import email from "../../assets/images/image 12.png"
import linkedin from "../../assets/images/image 13.png"

function Contact() {
  // const [contactUrls, setContactUrls] = useState([]);
  // console.log("ContactUrls : ", contactUrls);
  const contact = [
    {
      imgSrc: email,
      linkSrc: "mailto:anuragsonkar053@gmail.com",
      displayText: "anuragsonkar053@gmail.com"
    },
    {
      imgSrc: linkedin,
      linkSrc: "https://www.linkedin.com/in/anurag-sonkar-27bb2419b/",
      displayText: "https://www.linkedin.com/in/anurag-sonkar-27bb2419b/"
    },
    {
      imgSrc: github,
      linkSrc: "https://github.com/anurag-sonkar",
      displayText: "https://github.com/anurag-sonkar"
    },
  ];
  // async function fetchAllImages() {
  //   try {
  //     const imagesRefs = ref(storage, "rootImages/ContactImages");
  //     const imageList = await listAll(imagesRefs);

  //     const allUrls = imageList.items.map(async (imageRef) => {
  //       const url = await getDownloadURL(imageRef);
  //       return url;
  //     });
  //     const urls = await Promise.all(allUrls);
  //     setContactUrls(urls);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchAllImages();
  // }, []);
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
