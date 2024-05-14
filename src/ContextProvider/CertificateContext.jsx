import React, { createContext, useContext, useEffect, useState } from "react";
import Certificate0a from "../assets/CertificatesImages/Certificate0(a).png";
import Certificate0b from "../assets/CertificatesImages/Certificate0(b).png";
import Certificate1a from "../assets/CertificatesImages/Certificate1(a).png";
import Certificate1b from "../assets/CertificatesImages/Certificate1(b).png";
import Certificate2a from "../assets/CertificatesImages/Certificate2(a).png";
import Certificate2b from "../assets/CertificatesImages/Certificate2(b).png";
import Certificate3a from "../assets/CertificatesImages/Certificate3(a).png";
import Certificate3b from "../assets/CertificatesImages/Certificate3(b).png";
import Certificate4a from "../assets/CertificatesImages/Certificate4(a).png";
import Certificate4b from "../assets/CertificatesImages/Certificate4(b).png";
import Certificate5a from "../assets/CertificatesImages/Certificate5(a).png";
import Certificate5b from "../assets/CertificatesImages/Certificate5(b).png";

export const CertificateContext = createContext();

export const useCertificate = () => useContext(CertificateContext);

const CertificateContextProvider = (props) => {
  const [displayCertificates, setDisplayCertificates] = useState([
    Certificate0a,
    Certificate1a,
    Certificate2a,
    Certificate3a,
    Certificate4a,
    Certificate5a,
  ]);

  const [selectedCertificate, setSelectedCertificate] = useState(Certificate0a);
  const [certificateToBeEdit, setCertificateToBeEdit] = useState(null);
  const [overlayCSS, setOverlayCSS] = useState(null);

  useEffect(() => {
    switch (selectedCertificate) {
      case Certificate0a: {
        setCertificateToBeEdit(Certificate0b);
        setOverlayCSS([
          {
            position: "absolute",
            top: "0",
            left: "0px",
            width: "100%",
            height: "100%",
            color: "#000",
          },
          {
            position: "absolute",
            top: "36%",
            fontSize: "35px",
            // fontWeight: "600",
            width: "100%",
            textAlign: "center",
            fontFamily: "Satisfy",
            fontWeight: "400",
            fontStyle: "normal",
          },
          {
            position: "absolute",
            top: "54%",
            left: "14%",
            width: "70%",
            fontSize: "8px",
            lineHeight: "10px",
            display: "table",
            margin: "auto",
            textAlign: "center",
            textAlignLast: "center",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "80%",
            left: "18%",
            fontSize: "11px",
            fontWeight: "400",
            width: "30%",
            textAlign: "center",
            lineHeight: "10px",
            fontFamily: "Satisfy",
            fontWeight: "400",
            fontStyle: "normal",
          },
          {
            sign: true,

            position: "absolute",
            top: "79%",
            left: "52%",
            fontSize: "11px",
            fontWeight: "400",
            width: "30%",
            textAlign: "center",
            fontFamily: "Satisfy",
            fontWeight: "400",
            fontStyle: "normal",
          },
        ]);
        break;
      }

      case Certificate1a: {
        setCertificateToBeEdit(Certificate1b);
        setOverlayCSS([
          {
            position: "absolute",
            top: "0",
            left: "0px",
            width: "100%",
            height: "100%",
          },
          {
            position: "absolute",
            top: "37%",
            fontSize: "30px",
            fontWeight: "600",
            width: "100%",
            textAlign: "center",
          },
          {
            position: "absolute",
            top: "52%",
            left: "14%",
            width: "70%",
            fontSize: "8px",
            lineHeight: "10px",
            display: "table",
            margin: "auto",
            textAlign: "center",
            textAlignLast: "center",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "72%",
            left: "26%",
            fontSize: "10px",
            fontWeight: "400",
          },
          {
            sign: true,
            position: "absolute",
            top: "72%",
            left: "58%",
            fontSize: "10px",
            fontWeight: "400",
          },
        ]);
        break;
      }

      /** 2nd */

      case Certificate2a: {
        setCertificateToBeEdit(Certificate2b);
        setOverlayCSS([
          {
            position: "absolute",
            top: "0",
            left: "0px",
            width: "100%",
            height: "100%",
            color: "#fff",
          },
          {
            position: "absolute",
            top: "49%",
            fontSize: "22px",
            fontWeight: "600",
            width: "100%",
            textAlign: "center",
            fontFamily: "cursive",
            color: "#F99FDC",
          },
          {
            position: "absolute",
            top: "62%",
            left: "14%",
            width: "70%",
            fontSize: "8px",
            lineHeight: "10px",
            display: "table",
            margin: "auto",
            textAlign: "center",
            textAlignLast: "center",
            fontFamily: "Verdana",
          },
          {
            sign: false,
            position: "absolute",
            top: "74%",
            left: "24%",
            fontSize: "10px",
            fontWeight: "400",
          },
          {
            sign: false,
            position: "absolute",
            top: "74%",
            left: "56%",
            fontSize: "10px",
            fontWeight: "400",
          },
        ]);
        break;
      }

      /* 3rd */
      case Certificate3a: {
        setCertificateToBeEdit(Certificate3b);
        setOverlayCSS([
          {
            position: "absolute",
            top: "0",
            left: "0px",
            width: "100%",
            height: "100%",
            color: "#000",
          },
          {
            position: "absolute",
            top: "38%",
            fontSize: "22px",
            fontWeight: "600",
            width: "100%",
            textAlign: "center",
            fontFamily: "cursive",
          },
          {
            position: "absolute",
            top: "50%",
            left: "14%",
            width: "70%",
            fontSize: "8px",
            lineHeight: "10px",
            display: "table",
            margin: "auto",
            textAlign: "center",
            textAlignLast: "center",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "72%",
            left: "24%",
            fontSize: "10px",
            fontWeight: "400",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "72%",
            left: "60%",
            fontSize: "10px",
            fontWeight: "400",
            fontFamily: "Verdana",
          },
        ]);
        break;
      }

      /** 4th */
      case Certificate4a: {
        setCertificateToBeEdit(Certificate4b);
        setOverlayCSS([
          {
            position: "absolute",
            top: "0",
            left: "0px",
            width: "100%",
            height: "100%",
            color: "#000",
          },
          {
            position: "absolute",
            top: "38%",
            fontSize: "22px",
            fontWeight: "600",
            width: "100%",
            textAlign: "center",
            fontFamily: "cursive",
          },
          {
            position: "absolute",
            top: "52%",
            left: "14%",
            width: "70%",
            fontSize: "8px",
            lineHeight: "10px",
            display: "table",
            margin: "auto",
            textAlign: "center",
            textAlignLast: "center",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "77%",
            left: "20%",
            fontSize: "10px",
            fontWeight: "400",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "77%",
            left: "58%",
            fontSize: "10px",
            fontWeight: "400",
            fontFamily: "Verdana",
          },
        ]);
        break;
      }

      /** 5th */
      case Certificate5a: {
        setCertificateToBeEdit(Certificate5b);
        setOverlayCSS([
          {
            position: "absolute",
            top: "0",
            left: "0px",
            width: "100%",
            height: "100%",
            color: "#fff",
          },
          {
            position: "absolute",
            top: "42%",
            fontSize: "30px",
            fontWeight: "800",
            width: "100%",
            textAlign: "center",
            fontFamily: "cursive",
          },
          {
            position: "absolute",
            top: "58%",
            left: "24%",
            width: "50%",
            fontSize: "8px",
            lineHeight: "10px",
            display: "table",
            margin: "auto",
            textAlign: "center",
            textAlignLast: "center",
            fontFamily: "Verdana",
          },
          {
            sign: true,
            position: "absolute",
            top: "83%",
            left: "36%",
            fontSize: "10px",
            fontWeight: "400",
            fontFamily: "Verdana",
          },
          {
            sign: false,
            position: "absolute",
            top: "77%",
            left: "58%",
            fontSize: "10px",
            fontWeight: "400",
            fontFamily: "Verdana",
          },
        ]);
        break;
      }
    }
  }, [selectedCertificate]);

  return (
    <CertificateContext.Provider
      value={{
        displayCertificates,
        selectedCertificate,
        setSelectedCertificate,
        certificateToBeEdit,
        overlayCSS,
      }}
    >
      {props.children}
    </CertificateContext.Provider>
  );
};
export default CertificateContextProvider;
