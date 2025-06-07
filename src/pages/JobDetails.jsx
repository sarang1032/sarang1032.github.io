import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
const JobDetails = () => {
    // const {id}=useParams();
    const jobdetails=useLoaderData();
    return (
        <div className='jobdetails'>
            <p><b>Job Title: </b>{jobdetails.title}</p>
            <p><b>Salary: </b>{jobdetails.salary}</p>
            <p><b>Location: </b>{jobdetails.location}</p>
            <button>Apply now</button>
        </div>
    )
}

export default JobDetails
export const Jobdetailsloader=async({params})=>{
    const {id}=params;
    const res=await fetch('http://localhost:5000/jobs/'+id);
    if(!res.ok){
        throw Error('Could not fetch the job details')
    }
    return res.json();
}