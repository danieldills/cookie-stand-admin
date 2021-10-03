import React from "react";

function LocationForm() {
  return (
    <div className="flex flex-col p-6 mx-20 my-5 bg-green-300 rounded-md">
      <div className="mb-4 text-center">
        <h2 className="text-xl">Create Cookie Stand</h2>
      </div>
      <div className="flex w-full mb-4">
        <label className="pr-2">Location:</label>
        <input className="w-full" type="text" name="location" />
      </div>
      <div className="flex items-center gap-2 text-center">
        <div className="bg-green-200 rounded-md ">
          <label for="minCustomers">Minimum Customers per Hour</label>
          <input name="minCustomers" type="number" />
        </div>
        <div className="bg-green-200 rounded-md">
          <label for="maxCustomers">Maximum Customers per Hour</label>
          <input name="maxCustomers" type="number" />
        </div>
        <div className="bg-green-200 rounded-md">
          <label for="avgCookies">Average Cookies per Sale</label>
          <input name="avgCookies" type="number" />
        </div>
        <button className="px-5 bg-green-400">Create</button>
      </div>
    </div>
  );
}

export default LocationForm;
