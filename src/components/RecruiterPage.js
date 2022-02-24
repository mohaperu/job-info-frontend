import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import 'boxicons'

const RecruiterPage = () => {

  const [show, setShow] = useState(false);

  const [get, setGet] = useState([]);

  useEffect(async () => {
    await axios.get("https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo")
      .then(response => setGet(response.data))
  }, [])

  const deletePost = async (id) => {
    await axios.delete(`https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo/${id}`)
      .then(() => load())
  }

  const load = async () => await axios.get("https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo").then(response => setGet(response.data))

  const selectUser = (id) => {
    console.log(id);
  }
  

  return (
    <>
      <NavBar />
      <p className="recruit-title">Recruiter Page</p>

      <Link id="recruiter-create" to="/recruiter-create">
        <div className='card'>
          <p className='addJobs'>➕ Add Jobs</p>
        </div>
      </Link>

      <div className='jobList'>
        <Link to="/recruiter-appliedCandidates"><p className='applycand'>View Applied Candidates</p></Link>
        <div className='jobCards'>
          {get.map(data =>
            <div className='jobcard'>
              <div className='jobItem'>
                <p className='jobTitle'>{data.Title}</p>
                <div className='jobDescItem'>
                  <p className='jobDesc'>{data.Skills}</p>
                </div>
                <div className='desc'>
                  <p className='viewDesc' onClick={() => setShow(!show)} >View Description</p><box-icon name='down-arrow'></box-icon>
                </div>
                {show ?
                  <div>
                    <p className='showDetails'>◾ {data.Description}</p>
                  </div> :
                  show
                }
              </div>
              <div className='apply'>
                <Link to={`/recruiter-edit/?id=${data.id}`}><button onClick={() => selectUser(data.id)} id="applybtn">Edit</button></Link>
                <button id="applybtn" onClick={() => deletePost(data.id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default RecruiterPage