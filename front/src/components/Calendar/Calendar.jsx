import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

const Calendar = () => {
  const handleDateClick = () => {
    console.log("test");
  };

  return (
    <React.Fragment>
      <FullCalendar
        contentHeight={"75vh"}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          left: "prev next",
          center: "title",
          end: "today dayGridYear,dayGridMonth,timeGridWeek",
        }}
        dateClick={handleDateClick}
      />
    </React.Fragment>
  );
};

export default Calendar;
