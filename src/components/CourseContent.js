import React, { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { updateContent, updateSubTopics } from '../utils/contentSlice';

const CourseContent = ({topicNumber}) => {

  //subscribing to courseContent
  const topics = useSelector((store)=>store.content.courseContent);
  
  const dispatch = useDispatch();
  const [currentTopic,setCurrentTopic]= useState(null);
  
  useEffect(()=>{
    const current = topics.filter((topic)=>topic.id===topicNumber);
    setCurrentTopic(current)
  },[topicNumber,topics]);

    //early return to prevent reading null error
    if(currentTopic===null) return null;

    const {topic,subtopics}=currentTopic[0];


    //logic for handling check box
    const handleCheckboxChange = (e,id)=>{
      const updatedSubtopics = subtopics.map(item=>{
        if(item.id===id){
          //dispatch action to update contentSlice/subtopics slice
          dispatch(updateSubTopics({...item, isChecked: e.target.checked}))

          return {...item, isChecked: e.target.checked}
        }else{
          return item;
        }
      });
      const updatedArray= currentTopic.map((item)=>{
        return {...item, subtopics: updatedSubtopics}
      });
      setCurrentTopic(updatedArray);
      
      //Updating the store
      dispatch(updateContent(updatedArray));
    }

  return (
    <div className='m-2 mx-6 p-4'>
        <h1 className=' font-bold text-2xl my-2 mb-6'>{topic}</h1>
        <h2 className='font-semibold text-xl my-2'>Topics to learn:</h2>
        <ul className=''>
        {subtopics.map((sub)=>{
            return(
                <li key = {uuid()}><input type='checkbox' id={sub.id} checked={sub.isChecked} onChange={(e)=>handleCheckboxChange(e,sub.id)}/> {sub.name}</li>
            )
        })}
        </ul>
    </div>
  )
}

export default CourseContent