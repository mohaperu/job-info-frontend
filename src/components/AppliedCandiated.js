import React, { useState } from 'react'
import NavBar from './NavBar';
import 'boxicons'

const AppliedCandiated = () => {
    const [show, setShow] = useState(false);

    return (
        <>
    <NavBar/>
        <div className="appliedCandid">
            <div className='jobCards'>
                <p style={{textAlign:"center"}}>No Jobs Available</p>
                {/* <div className='jobcard'>
                    <div className='jobItem'>
                        <p id="username">Mohan</p>
                        <p className='jobTitle'>React js Developer</p>
                        <div className='jobDescItem'>
                            <p className='jobDesc'> react</p>
                            <p className='jobDesc'> react</p>
                        </div>
                        <div className='desc'>
                            <p className='viewDesc' onClick={() => setShow(!show)} >View Description</p><box-icon name='down-arrow'></box-icon>
                        </div>
                        {show ?
                            <div>
                                <p className='showDetails'>◾ djdisjdisjdsijdisdji</p>
                            </div> :
                            show
                        }

                    </div>
                    <div className='apply'>
                        <button id="applybtn" disabled>Applied</button>
                        <button id="applybtn">Remove</button>
                    </div>
                </div> */}


            </div>
        </div>  
        </>
    )
}

export default AppliedCandiated