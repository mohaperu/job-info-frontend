import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './NavBar';

const Create = () => {

  const history = useHistory();

  const [data, setData] = useState({
    Title: "",
    Skills: "",
    Description: "",
  })

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async () => {
    await axios.post('https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo', data)
      .then(() => history.goBack())
  }

  return (
    <>
      <NavBar />
      <div className='recruiter-post'>
        <div>
          <p className='recruiter-create-title'>Create Job</p>
        </div>
        <div>
          <label for="title" id="ltitle">Title</label><br />
          <input type="text" onChange={handleChange} value={data.Title} name="Title" id="title" placeholder="Title" /><br />
          <label for="skills" id="lskills">Skills</label><br />
          <input type="text" onChange={handleChange} value={data.Skills} name="Skills" id="skills" placeholder="Skills" /> <br />
          <label for="title" id="ldesc">Job Description</label><br />
          <input type="text" onChange={handleChange} value={data.Description} name="Description" id="desc" placeholder="Job Description" /><br />
          <input type="submit" id="submit" value="Create" onClick={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default Create;