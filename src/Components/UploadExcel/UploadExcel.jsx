import React, { useState, useEffect } from "react";
import styles from "./UploadExcel.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
/** firebase storage */
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
/** bootstrap */
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useExcelFile } from "../../ContextProvider/ExcelFileContext";
/*** excel  */
import * as XLSX from "xlsx";

/* */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import img1 from "../../assets/images/excel.png"
import img2 from "../../assets/images/excel (1).png"
import img3 from "../../assets/images/file (1).png"
import img4 from "../../assets/images/upload.png"

function UploadExcel() {
  const [excelImagesUrls, setExcelImagesUrls] = useState([img1,img2,img3,img4]);
  const [id, setId] = useState(0);
  /** */
  const [typeError, setTypeError] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const { excelData, setExcelData } = useExcelFile();

  const [notifyText, setNotifyText] = useState(
    "Welcome to certificate Generator"
  );

  const notify = () => {
    toast.success(notifyText);
  };

  useEffect(() => {
    notify();
  }, [notifyText]);

  // async function fetchAllImages() {
  //   try {
  //     const imagesRefs = ref(storage, "rootImages/uploadExcelImages");
  //     const imageList = await listAll(imagesRefs);

  //     const allUrls = imageList.items.map(async (imageRef) => {
  //       const url = await getDownloadURL(imageRef);
  //       return url;
  //     });
  //     const urls = await Promise.all(allUrls);
  //     setExcelImagesUrls(urls);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchAllImages();
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setId((prev) => (prev + 1) % excelImagesUrls.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [excelImagesUrls]); // Add excelImagesUrls as a dependency

  // input excel file
  // console.log("EXCELDATA : ", excelData);
  const handleExcelFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
      setNotifyText("Excel Uploaded Successfully");
    }
  };

  /** TextField data add in certificate */
  const [certificateText, setCertificateText] = useState(
    "This certifies that [name] completed the [course] program in [year] year. They actively engaged and demonstrated dedication throughout. Presented in recognition of their achievement."
  );

  const applyTextToCertificate = () => {
    if (excelData) {
      const filteredData = excelData.map((txt, index) => {
        let updatedText = certificateText;
        // Concatenate Firstname and LastName and replace [name]
        updatedText = updatedText.replace(
          "[name]",
          txt.Firstname + " " + txt.Lastname
        );
        // Replace [course] with the value from excelData
        updatedText = updatedText.replace("[course]", txt.Course);
        // Replace [year] with the value from excelData
        updatedText = updatedText.replace("[year]", txt.Year);

        // Update the text field with the modified certificate text
        return { ...txt, text: updatedText };
      });
      setExcelData(filteredData);
      setNotifyText("Data Applied Successfully");

      // console.log(filteredData);
    }
  };

  const downloadExcel = async () => {
    try {
      const fileRef = ref(storage, "file/excelFile/Certificate-Data.xlsx");
      const url = await getDownloadURL(fileRef);

      // Create a temporary anchor element
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "Certificate-Data.xlsx"; // Set the filename for download
      anchor.click(); // Simulate a click on the anchor element
      setNotifyText("Excel Downloaded Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.uploadExcelContainer} id="upload">
      <div className={styles.header}>
        <div className={styles.heading}>Upload Excel</div>
        <div className={styles.downloadDiv}>
          <button onClick={downloadExcel}>
            Download <img src={excelImagesUrls[0]} />
          </button>
        </div>
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
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {excelImagesUrls.map((imageSrc, index) => (
            <img
              src={imageSrc}
              key={index}
              className={`${id === index ? "show" : styles.hide}`}
            />
          ))}
        </div>
        <div className={styles.rightContainer}>
          <form
            className="form-group custom-form"
            onSubmit={(e) => {
              handleFileSubmit(e);
            }}
          >
            <input
              type="file"
              className="form-control"
              required
              onChange={(e) => {
                handleExcelFile(e);
              }}
            />
            <button
              type="submit"
              className="btn btn-success btn-md upload"
              style={{ width: "100%", marginTop: "1rem" }}
            >
              UPLOAD
            </button>
            {typeError && (
              <div className="alert alert-danger" role="alert">
                {typeError}
              </div>
            )}
          </form>
          <form style={{ marginTop: "20px" }}>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Add text for your certificate"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
                value={certificateText}
                onChange={(e) => {
                  setCertificateText(e.target.value);
                }}
              />
            </FloatingLabel>
            <Button
              variant="success"
              style={{ width: "100%", marginTop: "20px" }}
              onClick={applyTextToCertificate}
            >
              Apply
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadExcel;
