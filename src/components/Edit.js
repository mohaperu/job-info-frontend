import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar';

const Edit = () => {
  const history = useHistory();

  //put
  const load = async () => await axios.get("https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo").then(response => setGet(response.data))

  const onPut = async () => {
    await axios.put(`https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo/${id}`, get)
      .then(() => load())
      .then(() => history.goBack())
  }

  //get
  const [get, setGet] = useState([]);

  useEffect(async () => {
    await axios.get(`https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo/${id}`)
      .then(response => setGet(response.data))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGet({ ...get, [name]: value });
  }

  //to get id from localhost url
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  console.log(id);

  console.log("get", get)

  return (
    <>
      <NavBar />
      <div className='recruiter-post'>
        <div>
          <p className='recruiter-create-title'>Edit Job</p>
        </div>
        <div>
          <label for="title" id="ltitle">Title</label><br />
          <input type="text" onChange={handleChange} name="Title" value={get.Title} id="title" placeholder="Title" /><br />
          <label for="skills" id="lskills">Skills</label><br />
          <input type="text" onChange={handleChange} name="Skills" value={get.Skills} id="skills" placeholder="Skills" /> <br />
          <label for="title" id="ldesc">Job Description</label><br />
          <input type="text" onChange={handleChange} name="Description" value={get.Description} id="desc" placeholder="Job Description" /><br />
          <button id="submit" onClick={() => onPut(get)}>Update</button>
        </div>
      </div>
    </>
  )
}

export default Edit;