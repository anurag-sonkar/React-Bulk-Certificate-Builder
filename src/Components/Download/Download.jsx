import React, { useEffect } from "react";
import styles from "./Download.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
import pdfImg from "../../assets/folder.png";
import { useCertificate } from "../../ContextProvider/CertificateContext";
import { useExcelFile } from "../../ContextProvider/ExcelFileContext";
function Download() {
  const { certificateToBeEdit, overlayCSS } = useCertificate();
  const { excelData, setExcelData } = useExcelFile();

  // generate pdf
  const generatePDF = async () => {
    // const pdf = new jsPDF("landscape");
    const pdf = new jsPDF("landscape", "px", "a4"); // Adjust page size and format

    // Select all certificate containers
    const certificates = document.querySelectorAll(
      `.${styles.certificateWrapper}`
    );

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
  };

  const downloadSingleCertificate = async (index) => {
    const pdf = new jsPDF("landscape", "px", "a4"); // Adjust page size and format
    const certificates = document.querySelectorAll(
      `.${styles.certificateWrapper}`
    );

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
          <button onClick={generatePDF}>
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
      <div className={styles.container}>
        {excelData ? (
          <div className={styles.certificate}>
            {excelData.map((ele, index) => (
              <div
                className={styles.certificateWrapper}
                key={index}
                onClick={() => downloadSingleCertificate(index)}
              >
                <img src={certificateToBeEdit} alt="Certificate" />
                <div className={styles.overlay} style={overlayCSS[0]}>
                  <span style={overlayCSS[1]}>
                    {ele.Firstname} <span> </span> {ele.Lastname}
                  </span>
                  <div style={overlayCSS[2]}>
                    {/* Use a ternary operator to check if the text field is present */}
                    {ele.text
                      ? ele.text
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat a erat molestie ornare. Vestibulum tempus tortor quis mi lobortis congue vel nec libero. Morbi risus est, scelerisque id viverra ut, porttitor vitae lorem."}
                  </div>
                  {overlayCSS[3].sign && (
                    <span style={overlayCSS[3]}>{ele.Hod}</span>
                  )}
                  {overlayCSS[4].sign && (
                    <span style={overlayCSS[4]}>{ele.Supervisior}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noCertificateDiv}>
            <p>No Certificate to Download</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Download;
