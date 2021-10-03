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
      <thead className="bg-green-400">
        <tr>
          <th className="px-6">Location</th>
          {props.hours.map((hour) => {
            return (
              <th className="px-2" key={Math.random()}>
                {hour}
              </th>
            );
          })}
          <th className="px-4">Totals</th>
        </tr>
      </thead>
      <tbody>
        {props.reports.map((store) => {
          return (
            <tr key={Math.random()}>
              <td>{store.location}</td>
              {store.hourly_sale.map((sale) => {
                return <td>{sale}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReportTable;
