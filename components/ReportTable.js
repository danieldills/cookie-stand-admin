import React from "react";

function ReportTable(props) {
  /*
  
  Expecting Props
  - hours props -> an array of cookie stand hours(data.js)
  - reports props -> array of all cookie stand objects
  
  - if reports is empty, render <h2>No Cookie Stands Available<h2>
  - otherwise render table
  - need to tally totals for each cookie stand
  - need to tally totals for per hourly slot
  */
  return (
    <table className="w-1/2 mx-auto my-4">
      <thead>
        <tr>
          <th>Location</th>
          {props.hours.map((hour) => {
            return <th key={Math.random()}>{hour}</th>;
          })}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ReportTable;
