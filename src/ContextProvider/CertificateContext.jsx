import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { createContext, useContext, useState, useEffect } from "react";
import { storage } from "../firebaseConfig";

export const CertificateContext = createContext();
export const useCertificate = () => useContext(CertificateContext);

const CertificateContextProvider = (props) => {
  const [displayCertificates, setDisplayCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState("");
  const [editableCertificates, setEditableCertificates] = useState([]);
  const [certificateToBeEdit, setCertificateToBeEdit] = useState(null);
  // console.log("editableCertificates", editableCertificates);
  async function fetchAllCertificates() {
    try {
      const imagesRefs = ref(storage, "rootImages/Certificate_To_Display");
      const imagesRefs2 = ref(storage, "rootImages/Certificate_To_Edit");

      const imageList = await listAll(imagesRefs);
      const imageList2 = await listAll(imagesRefs2);

      const allUrls = imageList.items.map(async (imageRef) => {
        const url = await getDownloadURL(imageRef);
        return url;
      });

      const allUrls2 = imageList2.items.map(async (imageRef) => {
        const url = await getDownloadURL(imageRef);
        return url;
      });

      const urls = await Promise.all(allUrls);
      const urls2 = await Promise.all(allUrls2);

      setDisplayCertificates(urls);
      setEditableCertificates(urls2);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    switch (selectedCertificate) {
      case displayCertificates[0]:
        {
          setCertificateToBeEdit(editableCertificates[0]);
        }
        break;

      case displayCertificates[1]:
        {
          setCertificateToBeEdit(editableCertificates[1]);
        }
        break;

      case displayCertificates[2]:
        {
          setCertificateToBeEdit(editableCertificates[2]);
        }
        break;

      case displayCertificates[3]:
        {
          setCertificateToBeEdit(editableCertificates[3]);
        }
        break;

      case displayCertificates[4]:
        {
          setCertificateToBeEdit(editableCertificates[4]);
        }
        break;

      case displayCertificates[5]:
        {
          setCertificateToBeEdit(editableCertificates[5]);
        }
        break;
    }
  }, [selectedCertificate]);

  useEffect(() => {
    fetchAllCertificates();
  }, []);

  return (
    <CertificateContext.Provider
      value={{
        displayCertificates,
        selectedCertificate,
        setSelectedCertificate,
      }}
    >
      {props.children}
    </CertificateContext.Provider>
  );
};

export default CertificateContextProvider;
