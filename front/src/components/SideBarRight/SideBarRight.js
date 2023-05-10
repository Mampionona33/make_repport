import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const SideBarRight = () => {
  const [repportDate, setRepportDate] = useState(new Date());
  return (
    <>
      <div>
        <label htmlFor="date-picker" className="label">
          select repporting date
        </label>
        <DatePicker
          inline
          id="date-picker"
          selected={repportDate}
          dateFormat={"dd/mm/yyyy"}
          onChange={(date) => setRepportDate(date)}
        />
      </div>
    </>
  );
};

export default SideBarRight;
