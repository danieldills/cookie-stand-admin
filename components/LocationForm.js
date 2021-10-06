import { useState } from "react";

function LocationForm({ updateReport }) {
  const [formItems, setFormItems] = useState({});

  const handleChange = (e) => {
    let newItems = {
      ...formItems,
      [e.target.name]: e.target.value,
    };
    setFormItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateReport(formItems);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-6 mx-20 my-5 bg-green-300 rounded-md"
    >
      <div className="mb-4 text-center">
        <h2 className="text-xl">Create Cookie Stand</h2>
      </div>
      <div className="flex w-full mb-4">
        <label className="pr-2">Location:</label>
        <input
          className="w-full"
          name="location"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 text-center">
        <div className="bg-green-200 rounded-md ">
          <label for="minCustomers">Minimum Customers per Hour</label>
          <input name="minCustomers" type="number" onChange={handleChange} />
        </div>
        <div className="bg-green-200 rounded-md">
          <label for="maxCustomers">Maximum Customers per Hour</label>
          <input name="maxCustomers" type="number" onChange={handleChange} />
        </div>
        <div className="bg-green-200 rounded-md">
          <label for="avgCookies">Average Cookies per Sale</label>
          <input name="avgCookies" type="number" onChange={handleChange} />
        </div>
        <button className="px-5 bg-green-400">Create</button>
      </div>
    </form>
  );
}

export default LocationForm;
