import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Error = () => {
  const error=useRouteError();
  const navigate=useNavigate();
  return (
    <div>
      <h2>Oops!!! An error occured</h2>
      <p>{error.message}</p>
      <Link to={navigate('/')}>Go to homepage</Link>
    </div>
  )
}

export default Error