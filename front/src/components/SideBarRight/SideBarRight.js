import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CSVReader from "react-csv-reader";

const SideBarRight = () => {
  const [repportDate, setRepportDate] = useState(new Date());
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleOnFileLoad = (csvData, file) => {
    setCsvData(csvData);
    setFileName(file.name);
  };

  const handleSubmit = () => {
    setFileName("");
    // Utilisez 'fileName' dans votre logique de soumission ou de traitement du fichier CSV
  };

  return (
    <>
      <div>
        <label htmlFor="date-picker" className="label">
          select reporting date
        </label>
        <DatePicker
          id="date-picker"
          selected={repportDate}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setRepportDate(date)}
        />
      </div>
      <div>
        <CSVReader
          onFileLoaded={handleOnFileLoad}
          parserOptions={{ header: true }}
          inputId="csv-input"
          inputStyle={{ display: "none" }}
        />
        <label htmlFor="csv-input" className="button">
          Upload CSV
        </label>
      </div>
      {fileName && <p>File Name: {fileName}</p>}
      <input
        type="submit"
        className="button"
        value="Submit"
        onClick={handleSubmit}
      />
    </>
  );
};

export default SideBarRight;
