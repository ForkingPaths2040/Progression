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
  const [stance, setStance] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      username,
      description,
      giph,
      location,
      landing,
      trick,
      type,
      stance
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
    setStance('')
  };
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input
        type="text"
        value={username}
        placeholder='Username'
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor=""></label>
      <input
        type="text"
        value={trick}
        placeholder='Name of trick'
        onChange={(e) => setTrick(e.target.value)}
      />
      <label htmlFor=""></label>
      <textarea id='text-area'
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label htmlFor=""></label>
      <input
        type="text"
        value={giph}
        placeholder="URL link from Giphy"
        onChange={(e) => setGiph(e.target.value)}
      />
      <label htmlFor=""></label>
      <input
        type="text"
        value={location}
        placeholder='Location'
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor=""></label>
      <select value={landing} onChange={(e) => setLanding(e.target.value)} >
        <option>Landing Type</option>
        <option>Clean</option>
        <option>Sketchy</option>
        <option>Fail</option>
      </select>
      <label htmlFor=""></label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Environment Type</option>
        <option>Street</option>
        <option>Park</option>
        <option>Vert</option>
      </select>
      <label htmlFor=""></label>
      <select value={stance} onChange={(e) => setStance(e.target.value)}>
        <option>Stance</option>
        <option>Goofy</option>
        <option>Regular</option>
      </select>
      <button type="submit">Submit</button>
      </form>
      </div>
  );
}

export default Form;
