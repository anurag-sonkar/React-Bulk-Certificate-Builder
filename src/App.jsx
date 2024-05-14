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
import Download from "./Components/Download/Download";
import { useTheme } from "./ContextProvider/ThemeContext";

function App() {
  const { themePlate, themeSelector, setThemeSelector } = useTheme();
  // console.log("THEME : ", obj);
  return (
    <>
      <div
        className={styles.App}
        style={{
          ...themeSelector,
        }}
        id="home"
      >
        <div className={styles.themeContainer}>
          <div className={styles.selectTheme}>
            {themePlate.map((ele, index) => (
              <div
                key={index}
                onClick={() => {
                  setThemeSelector(themePlate[index]);
                }}
                style={{ ...ele }}
              ></div>
            ))}
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
              <Download />
            </ExcelContextProvider>
          </CertificateContextProvider>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default App;
