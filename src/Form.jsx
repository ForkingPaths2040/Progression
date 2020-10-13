import Axios from "axios";
import React, { useState } from "react";

function Form(props) {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [giph, setGiph] = useState("");
  const [trick, setTrick] = useState("");
  const [location, setLocation] = useState("");
  const [landing, setLanding] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      username,
      description,
      giph,
      location,
      landing,
      trick,
      type
    };
    const airtableURL = `https://api.airtable.com/v0/appsnyAAoewIo80Ig/progressions`;
    await Axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer keyA4pUKd1DMLTmI9`,
        },
      }
    );
    setUserName("");
    setDescription("");
    setGiph("");
    setLocation("");
    setLanding("");
    setType("");
    setTrick("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="">Trick</label>
      <input
        type="text"
        value={trick}
        onChange={(e) => setTrick(e.target.value)}
      />
      <label htmlFor="">Description</label>
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label htmlFor="">Giph</label>
      <input
        type="text"
        value={giph}
        onChange={(e) => setGiph(e.target.value)}
      />
      <label htmlFor="">Location</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="">Landing</label>
      <select value={landing} onChange={(e) => setLanding(e.target.value)}>
        <option>Select</option>
        <option>Clean</option>
        <option>Sketchy</option>
        <option>Fail</option>
      </select>
      <label htmlFor="">Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Select</option>
        <option>Street</option>
        <option>Park</option>
        <option>Vert</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
