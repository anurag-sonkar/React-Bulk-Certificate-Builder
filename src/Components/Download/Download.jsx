import React, { useEffect } from "react";
import styles from "./Download.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
import pdfImg from "../../assets/folder.png";
function Download() {
  // generate pdf
  const generatePDF = async () => {
    // const pdf = new jsPDF("landscape");
    const pdf = new jsPDF("landscape", "px", "a4"); // Adjust page size and format

    // Select all certificate containers
    const certificates = document.querySelectorAll(".certificateWrapper");

    // Iterate through each certificate container
    for (let i = 0; i < certificates.length; i++) {
      const certificate = certificates[i];

      // Capture the certificate container as an image
      // const canvas = await html2canvas(certificate, { scale: 2 });
      const canvas = await html2canvas(certificate, { scale: 5 }); // Adjust scale

      const imgData = canvas.toDataURL("image/png");

      // Add a new page for each certificate (except the first one)
      if (i !== 0) {
        pdf.addPage("landscape");
      }

      // Add the captured image to the PDF
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
    }

    // Save the PDF
    pdf.save("certificates.pdf");
    notify("All Pdf Downloded Successfully.");
  };

  const downloadSingleCertificate = async (index) => {
    const pdf = new jsPDF("landscape", "px", "a4"); // Adjust page size and format
    const certificates = document.querySelectorAll(".certificateWrapper");

    if (index >= 0 && index < certificates.length) {
      const certificate = certificates[index];
      const canvas = await html2canvas(certificate, { scale: 5 }); // Adjust scale
      const imgData = canvas.toDataURL("image/png");

      // Add the captured image to the PDF
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );

      // Save the PDF after adding the image of the selected certificate
      pdf.save("certificate.pdf");
    } else {
      console.error("Certificate index out of range.");
    }
  };

  return (
    <div className={styles.downloadContainer} id="download">
      <div className={styles.header}>
        <div className={styles.heading}>download certificate</div>
        <div className={styles.downloadDiv}>
          <button>
            Download <img src={pdfImg} />
          </button>
        </div>
        <Link
          to="#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <MdArrowUpward />
        </Link>
      </div>
      <div className={styles.container}></div>
    </div>
  );
}

export default Download;
