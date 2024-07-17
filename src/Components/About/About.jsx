import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";

import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import userImage from "../../assets/images/cartoon.png"

import selectCertificate from "../../assets/images/selectCertificate.png"
import uploadExcel from "../../assets/images/uploadExcel.png"
import viewExcelData from "../../assets/images/viewExcelData.png"
import downloadPdf from "../../assets/images/downloadPdf.png"
// , uploadExcel , viewExcelData,downloadPdf
import GradientCircularProgress from "./GradientCircularProgress";
function About() {
  const [rightDivImagesUrls, setRightDivImagesUrls] = useState([]);
  const [leftDivImageUrl, setLeftDivImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // const fetchUserImage = async () => {
  //   try {
  //     const imageRef = ref(
  //       storage,
  //       "rootImages/AboutImages/LeftDiv/cartoon.png"
  //     );
  //     const url = await getDownloadURL(imageRef);
  //     setLeftDivImageUrl(url);
  //     // console.log("LEFT", leftDivImageUrl);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // async function fetchAllImages() {
  //   try {
  //     const imagesRefs = ref(storage, "rootImages/AboutImages/RightDiv");
  //     const imageList = await listAll(imagesRefs);

  //     const allUrls = imageList.items.map(async (imageRef) => {
  //       const url = await getDownloadURL(imageRef);
  //       return url;
  //     });
  //     const urls = await Promise.all(allUrls);
  //     setRightDivImagesUrls(urls);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   setLoading(true);
  //   fetchUserImage();
  //   fetchAllImages();
  // }, []);

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
            <img src={userImage} />
          )}
        </div>
        <div className="rightContainer">
          <div className={styles.cardContainer}>
            <div className={styles.leftDiv}>
              {loading ? (
                <GradientCircularProgress />
              ) : (
                <img src={selectCertificate} />
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
                <img src={uploadExcel} />
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
                <img src={viewExcelData} />
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
                <img src={downloadPdf} />
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
