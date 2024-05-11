import React, { createContext, useContext, useEffect, useState } from "react";

export const ExcelContext = createContext();

export const useExcelFile = () => useContext(ExcelContext);

const ExcelContextProvider = (props) => {
  const [excelData, setExcelData] = useState(null);

  return (
    <ExcelContext.Provider value={{ excelData, setExcelData }}>
      {props.children}
    </ExcelContext.Provider>
  );
};

export default ExcelContextProvider;
