import React from "react";
import styles from "./ViewExcelTable.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdArrowUpward } from "react-icons/md";
import { useExcelFile } from "../../ContextProvider/ExcelFileContext";
import Button from "react-bootstrap/Button";

function ViewExcelTable() {
  const { excelData, setExcelData } = useExcelFile();
  console.log("EXCEL_DATA : ", excelData);
  // delete
  const deleteEntry = (id) => {
    const filteredData = excelData.filter((entry, index) => index !== id);
    setExcelData(filteredData);
  };
  return (
    <div className={styles.viewExcelTableContainer} id="view_imports">
      <div className={styles.header}>
        <div className={styles.heading}>view Excel</div>
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
      <div>
        {excelData ? (
          <table>
            <thead>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Course</th>
              <th>Year</th>
              <th>Email</th>
              <th>Hod</th>
              <th>Supervisior</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {excelData.map((data, index) => (
                <tr key={index}>
                  <td>{data.Id}</td>
                  <td>{data.Firstname}</td>
                  <td>{data.Lastname}</td>
                  <td>{data.Course}</td>
                  <td>{data.Year}</td>
                  <td>{data.Email}</td>
                  <td>{data.Hod}</td>
                  <td>{data.Supervisior}</td>
                  <td
                    onClick={() => {
                      deleteEntry(index);
                    }}
                  >
                    <Button variant="outline-danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.noDataDiv}>
            <div>No Data To Display</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewExcelTable;
