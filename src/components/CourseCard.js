import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({courseDetails}) => {
    const {name,cover,difficulty,courseId}= courseDetails;
  return (
    (courseId==='CS')?(<Link to= {`/${courseId}`} className='border border-black rounded-md my-2' >
        <img className='w-80 h-56' src={cover} alt="cover"/>
        <h1 className='font-bold text-lg m-2'>{name}</h1>
        <h2 className='mx-2 mb-2'>{difficulty}</h2>
    </Link>):(<div className='border border-black rounded-md my-2' >
        <img className='w-80 h-56' src={cover} alt="cover"/>
        <h1 className='font-bold text-lg m-2'>{name}</h1>
        <h2 className='mx-2 mb-2'>{difficulty}</h2>
    </div>)
  )
}

export default CourseCard