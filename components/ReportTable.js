import React from "react";

function ReportTable(props) {
  if (props.reports.length === 0) {
    return <h2 className="text-center">No Cookie Stand Available</h2>;
  }
  return (
    <table className="w-1/2 mx-auto my-4 bg-gray-200">
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
            <tr className="odd:bg-gray-400" key={Math.random()}>
              <td>{store.location}</td>
              {store.hourly_sale.map((sale) => {
                return <td>{sale}</td>;
              })}
              <td>100</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReportTable;
