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

  console.log("reports: ", reports);

  const updateReport = (formObj) => {
    let result = calculate(formObj);
    let newReports = [...reports, result];
    setReports(newReports);
  };

  const calculate = (obj) => {
    /*
    INPUT
    obj.location
    obj.minCustomers
    obj.maxCustomers
    obj.avgCookies 
    
    OUTPUT
    location: city
    hourly_sale: an array of sales
    */

    let result = {
      location: obj.location,
      hourly_sale: generateCookiePerHour(
        obj.minCustomers,
        obj.maxCustomers,
        obj.avgCookies
      ),
    };

    return result;
  };

  function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCookiePerHour(minCustomers, maxCustomers, avgCookies) {
    let cookieSaleEveryHour = [];
    for (var i = 0; i < 14; i++) {
      cookieSaleEveryHour.push(
        Math.round(generateRandomNum(minCustomers, maxCustomers) * avgCookies)
      );
    }
    return cookieSaleEveryHour;
  }

  return (
    <div>
      <LocationForm updateReport={updateReport} />
      <ReportTable hours={hours} reports={reports} />
    </div>
  );
}

export default Main;
