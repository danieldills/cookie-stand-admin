import { useState } from "react";

import LocationForm from "./LocationForm";
import ReportTable from "./ReportTable";
import { hours } from "../hours";

function Main() {
  /*

  hours props to ReportTable - array of hours
  reports - an array of location objects

  */
  const [reports, setReports] = useState([]);

  const updateReport = (formObj) => {
    let newReports = [...reports, formObj];
    setReports(newReports);
  };

  console.log("reports: ", reports);

  return (
    <div>
      <LocationForm updateReport={updateReport} />
      <ReportTable hours={hours} />
    </div>
  );
}

export default Main;
