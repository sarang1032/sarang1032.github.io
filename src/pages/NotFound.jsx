import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate=useNavigate();
  return (
    <div className='notfound'>
      <h1>404 Not Found</h1>
      <div onClick={()=>navigate('/')}>Go to Dashboard</div>
    </div>
  )
}

export default NotFound