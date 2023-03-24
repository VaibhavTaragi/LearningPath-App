import React from 'react'
import NavButton from './NavButton';
import { courseDetails } from '../utils/mockData';

const Navbar = ({topicNumber, setTopicNumber}) => {
    
  return (
    <div className='m-2 p-2 flex justify-center'>
        <button className={`m-1 p-2 ${topicNumber<2?"bg-gray-300 ":"bg-green-200 hover:bg-green-300"} rounded-l-lg`} disabled={topicNumber<2} onClick={()=>setTopicNumber(topicNumber-1)}>{'<'}</button>
        {courseDetails.map((topic)=>{
             return <NavButton key={topic.id} id = {topic.id} name={topic.topic} topicNumber={topicNumber} setTopicNumber={setTopicNumber}/>  
        })}
        <button className={`m-1 p-2 ${topicNumber===5?"bg-gray-300":"bg-green-200 hover:bg-green-300"} rounded-r-lg `}disabled={topicNumber>4} onClick={()=>setTopicNumber(topicNumber+1)}>{'>'}</button>
    </div>
  )
}

export default Navbar