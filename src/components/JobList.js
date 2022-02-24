import React, { useEffect, useState } from 'react'
import 'boxicons'
import axios from 'axios';
import {Modal, Button, } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const JobList = () => {
    const [shows, setShows] = useState(false);

    const [get, setGet] = useState([]);

    useEffect(async () => {
        await axios.get("https://612dbcd5e579e1001791dcef.mockapi.io/Jobinfo")
            .then(response => setGet(response.data))
    }, [])

    const user = localStorage.getItem('RecruiterToken');
    console.log(user);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <div className='jobList'>
                <div className='jobCards'>
                    {/* <p>No Jobs Available</p> */}
                    {get.map(post =>
                        <div className='jobcard'>
                            <div className='jobItem'>
                                <p className='jobTitle'>{post.Title}</p>
                                <div className='jobDescItem'>
                                    <p className='jobDesc'> {post.Skills}</p>
                                </div>
                                <div className='desc'>
                                    <p className='viewDesc' onClick={() => setShows(!shows)} >View Description</p><box-icon name='down-arrow'></box-icon>
                                </div>
                                {shows ?
                                    <div>
                                        <p className='showDetails'>◾ {post.Description}</p>
                                    </div> :
                                    shows
                                }
                            </div>
                            <div className='apply'>
                                {user ? <button id="applybtn" onClick={handleShow}>Apply</button> : <Link to="/login"><button id="applybtn" onClick={handleShow}>Apply</button></Link>}
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Applying For Job</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure ?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleClose}>
                                        Yes
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        No
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default JobList