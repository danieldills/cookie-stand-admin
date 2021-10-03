import React from "react";
import LocationForm from "./LocationForm";
import ReportTable from "./ReportTable";
import { hours } from "../hours";

function Main() {
  /*

  hours props to ReportTable - array of hours
  reports to ReportTable - an array of location objects

  */

  return (
    <div>
      <LocationForm />
      <ReportTable hours={hours} />
    </div>
  );
}

export default Main;
