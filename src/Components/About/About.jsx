import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";

import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import GradientCircularProgress from "./GradientCircularProgress";
function About() {
  const [rightDivImagesUrls, setRightDivImagesUrls] = useState([]);
  const [leftDivImageUrl, setLeftDivImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUserImage = async () => {
    try {
      const imageRef = ref(
        storage,
        "rootImages/AboutImages/LeftDiv/cartoon.png"
      );
      const url = await getDownloadURL(imageRef);
      setLeftDivImageUrl(url);
      // console.log("LEFT", leftDivImageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchAllImages() {
    try {
      const imagesRefs = ref(storage, "rootImages/AboutImages/RightDiv");
      const imageList = await listAll(imagesRefs);

      const allUrls = imageList.items.map(async (imageRef) => {
        const url = await getDownloadURL(imageRef);
        return url;
      });
      const urls = await Promise.all(allUrls);
      setRightDivImagesUrls(urls);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    fetchUserImage();
    fetchAllImages();
  }, []);

  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.header}>
        <div className={styles.heading}>About</div>
        <Link
          to="#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <MdArrowUpward />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {loading ? (
            <GradientCircularProgress />
          ) : (
            <img src={leftDivImageUrl} />
          )}
        </div>
        <div className="rightContainer">
          <div className={styles.cardContainer}>
            <div className={styles.leftDiv}>
              {loading ? (
                <GradientCircularProgress />
              ) : (
                <img src={rightDivImagesUrls[1]} />
              )}
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.title}>Select Certificate</div>
              <div className={styles.content}>
                Choose from a variety of certificate designs and styles
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.leftDiv}>
              {loading ? (
                <GradientCircularProgress />
              ) : (
                <img src={rightDivImagesUrls[2]} />
              )}
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.title}>Upload Excel</div>
              <div className={styles.content}>
                Easily upload your Excel spreadsheet containing recipient
                information.
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.leftDiv}>
              {loading ? (
                <GradientCircularProgress />
              ) : (
                <img src={rightDivImagesUrls[3]} />
              )}
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.title}>View Excel</div>
              <div className={styles.content}>
                Effortlessly import data from the uploaded Excel file for
                certificate generation.
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.leftDiv}>
              {loading ? (
                <GradientCircularProgress />
              ) : (
                <img src={rightDivImagesUrls[0]} />
              )}
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.title}>Download Certifiate</div>
              <div className={styles.content}>
                Instantly download the personalized certificate for each
                recipient.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
