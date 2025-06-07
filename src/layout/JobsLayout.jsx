import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2 className='joblayout'>Job openings</h2>
        <p>List of current Job openings</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout