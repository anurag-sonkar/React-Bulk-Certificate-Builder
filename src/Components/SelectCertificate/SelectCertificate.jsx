import React, { useState } from "react";
import styles from "./SelectCertificate.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
import { useCertificate } from "../../ContextProvider/CertificateContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SelectCertificate() {
  const [id, setId] = useState(0);
  const { displayCertificates, selectedCertificate, setSelectedCertificate } =
    useCertificate();

  // console.log("OBJ", selectedCertificate);

  const previousMove = () => {
    setId((prev) => (id === 0 ? displayCertificates.length - 1 : prev - 1));
  };
  const nextMove = () => {
    setId((prev) => (prev + 1) % displayCertificates.length);
  };

  return (
    <div className={styles.selectCertificateContainer} id="templates">
      <div className={styles.header}>
        <div className={styles.heading}>Select Templates</div>
        <div className={styles.link}>
          <Link
            to="#home"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <MdArrowUpward />
          </Link>
        </div>
      </div>
      <div className={styles.displayCertificatesContainer}>
        <div className={styles.preview}>
          <div>Selected Template</div>
          <img src={selectedCertificate} />
        </div>
        <div className={styles.carousal}>
          <div>
            <ArrowBackIosIcon onClick={previousMove} fontSize="large" />
          </div>
          <div className={styles.certificate}>
            {displayCertificates.map((certificate, index) => (
              <img
                src={certificate}
                key={index}
                className={`${id === index ? "show" : styles.hide}`}
                onClick={() => {
                  setSelectedCertificate(certificate);
                }}
              />
            ))}
          </div>
          <div>
            <ArrowForwardIosIcon onClick={nextMove} fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCertificate;
