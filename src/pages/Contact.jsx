import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate();
  return (
    <div className='contact'>
      <button onClick={()=>navigate('info')}>Info</button>
      <button onClick={()=>navigate('form')}>Fill Form</button>
    </div>
  )
}

export default Contact