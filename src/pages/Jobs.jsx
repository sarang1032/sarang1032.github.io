import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
const Jobs = () => {
  const jobdata=useLoaderData();
  return (
    <div className='jobs'>
      {jobdata.map((job)=>{
        return(
          <Link to={job.id} key={job.id}><h4>{job.title}</h4><p>{job.location}</p></Link>
        )
      })}
    </div>
  )
}

export default Jobs
export const Jobsloader=async()=>{
  const res=await fetch('http://localhost:5000/jobs');
  if(!res.ok){
    throw Error("Couldn't load Job data")
  }
  return res.json();
}