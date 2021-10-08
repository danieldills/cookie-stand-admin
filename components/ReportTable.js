import React from "react";
import { MinusCircleIcon } from "@heroicons/react/outline";
import useResource from "../hooks/useResource";
import { hours } from "../hours";

function ReportTable() {
  const { deleteResource, resources } = useResource();
  console.log("this is resrouces: ", resources);

  if (resources && resources.length === 0) {
    return <h2 className="text-center">No Cookie Stand Available</h2>;
  }
  return (
    <table className="w-1/2 mx-auto my-4 bg-gray-200">
      <thead className="bg-green-400">
        <tr>
          <th className="px-6">Location</th>
          {hours.map((hour) => {
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
        {resources &&
          resources.map((store) => {
            return (
              <tr className="odd:bg-gray-400" key={Math.random()}>
                <td className="flex">
                  {store.location}
                  <MinusCircleIcon
                    className="w-5"
                    onClick={() => deleteResource(store.id)}
                  />
                </td>

                {store.hourly_sales.map((sale) => {
                  return <td>{sale}</td>;
                })}
                <td>
                  {store.hourly_sales.reduce((acc, cur) => {
                    return acc + cur;
                  })}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default ReportTable;
