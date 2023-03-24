import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setSubTopics } from '../utils/contentSlice';
import { courseDetails } from '../utils/mockData';
import CourseContent from './CourseContent';
import Navbar from './Navbar'
import PercentageBar from './PercentageBar';

const CourseBody = () => {
    const [topicNumber,setTopicNumber] = useState(1);
    const [percentage, setPercentage]= useState(0);
    //importing course details
    const details = courseDetails;

    //initializing dispatch
    const dispatch = useDispatch();

    
    useEffect(()=>{
      //fetch data from external API 
      //Used mock data via import ==> import { courseDetails } from '../utils/mockData';
      
      //updating contentSlice to set initial data
      dispatch(setContent(details));
      dispatch(setSubTopics(details));

    },[]);
    
    //subscribing to courseContent
    const topics = useSelector((store)=>store.content.courseContent);
    
    //subscribing to subtopics array

    const subtopics = useSelector(store=>store.content.subTopics);
    
    useEffect(()=>{
      // Logic for calculating percentage
      const total = subtopics.length;
      const checked = subtopics.filter(item=>item.isChecked===true);
      const percent = (checked.length/total)*100;
      setPercentage(percent.toFixed(0));
    },[subtopics]);

    //early return as the topics are yet to be stored in contentSlice
    if(!topics[0]) return null;

  return (
    <>
        <Navbar topicNumber={topicNumber} setTopicNumber={setTopicNumber}/>
        <PercentageBar percent={percentage}/>
        <CourseContent topicNumber={topicNumber}/>
    </>
  )
}

export default CourseBody