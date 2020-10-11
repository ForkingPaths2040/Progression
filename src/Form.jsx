import Axios from "axios";
import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      description,
      brand,
      location,
      category,
    };
    const airtableURL = `https://api.airtable.com/v0/appsnyAAoewIo80Ig/tools`;
    await Axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer keyA4pUKd1DMLTmI9`,
        },
      }
    );
    setName("");
    setDescription("");
    setBrand("");
    setLocation("");
    setCategory("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Description</label>
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label htmlFor="">Brand</label>
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <label htmlFor="">Location</label>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option>Select</option>
        <option>Garage</option>
        <option>Toolbox</option>
        <option>Junk Drawer</option>
        <option>Truck/car</option>
      </select>
      <label htmlFor="">Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Select</option>
        <option>Hand Tools</option>
        <option>Power Tools</option>
        <option>Fasteners</option>
        <option>Gardening Tools</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
