import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import Loading from "./Loading";
import userImage from "../../assets/images/user.png"

function Hero() {
  // const [userImageUrl, setUserImageUrl] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const fetchUserImage = async () => {
  //   try {
  //     const imageRef = ref(storage, "rootImages/UserImages/user.png");
  //     const url = await getDownloadURL(imageRef);
  //     setUserImageUrl(url);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserImage();
  // }, []);
  return (
    <div className={styles.container} id="home">
      <div className={styles.leftContainer}>
        <div className={styles.name}>
          A Certificate that stands out! Make your own certificate. It's free
        </div>
        <div className={styles.content}>
          Effortless Certificate Generation for Every Occasion
        </div>
        <div className={styles.btn}>
          <Link
            smooth
            to="#contact"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button>contact me</button>
          </Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
      {/* {userImage && <img src={userImage} />} */}
      {userImage ? <img src={userImage} /> : <Loading/>}
        {/* {loading ? <Loading /> : <img src={userImage} />} */}
      </div>
    </div>
  );
}

export default Hero;
