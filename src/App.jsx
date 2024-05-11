import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import SelectCertificate from "./Components/SelectCertificate/SelectCertificate";
import CertificateContextProvider from "./ContextProvider/CertificateContext";
import UploadExcel from "./Components/UploadExcel/UploadExcel";
import ExcelContextProvider from "./ContextProvider/ExcelFileContext";
import ViewExcelTable from "./Components/ViewExcelTable/ViewExcelTable";

function App() {
  return (
    <>
      <div
        className={styles.App}
        style={{
          background: "rgb(7,25,51)",
          backgroundImage:
            "linear-gradient(90deg, rgba(7,25,51,1) 0%, rgba(18,42,84,1) 24%, rgba(4,21,45,1) 100%)",
        }}
      >
        <div className={styles.themeContainer}>
          <div className={styles.selectTheme}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.Container}>
          <Header />
          <Hero />
          <About />
          <CertificateContextProvider>
            <SelectCertificate />
            <ExcelContextProvider>
              <UploadExcel />
              <ViewExcelTable />
            </ExcelContextProvider>
          </CertificateContextProvider>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default App;
