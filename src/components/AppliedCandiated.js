import React, { useState } from 'react'
import NavBar from './NavBar';

const AppliedCandiated = () => {
    return (
        <>
    <NavBar/>
        <div className="appliedCandid">
            <div className='jobCards'>
                <p style={{textAlign:"center"}}>No Jobs Available</p>
            </div>
        </div>  
        </>
    )
}

export default AppliedCandiated