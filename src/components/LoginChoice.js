import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginChoice = () => {
  return (
    <>
    <div className='login-choice'>
    <Link to="/login"><Button id="logChoi">Login</Button></Link><br/>
    Or<br/>
    <Link to="/recruiter-login"><Button id="logChoi">Recruiters Login</Button></Link>

    </div>
    </>
  )
}

export default LoginChoice