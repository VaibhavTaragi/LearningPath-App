import React from 'react'
import CourseCard from './CourseCard.js';

const Body = () => {

  // Mock Data for course card
  const courses = [{
    name:'Introduction to Computer Science',
    courseId:'CS',
    cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61JGJcZJfDL.jpg',
    difficulty:'Easy'
  },{
    name:'Introduction to JavaScript',
    courseId:'JS',
    cover: 'https://i.ytimg.com/vi/_y9oxzTGERs/maxresdefault.jpg',
    difficulty:'Easy'
  },{
    name:'What is Data Science?',
    courseId:'DS',
    cover: 'https://cdn.hackr.io/uploads/posts/large/1654226011MYkxFzyTlZ.png',
    difficulty:'Easy'
  },{
    name:'FOREX - Basics',
    courseId:'FX',
    cover: 'https://i.ytimg.com/vi/iewxw_p8Umc/maxresdefault.jpg',
    difficulty:'Easy'
  },{
    name:'Learn Bear Trap in Trading',
    courseId:'BT',
    cover: 'https://libertex.com/sites/default/files/blog/bear-trap-main.jpg',
    difficulty:'Easy'
  },{
    name:'React for Beginners',
    courseId:'React',
    cover: 'https://www.freecodecamp.org/news/content/images/2021/07/reactcourse.png',
    difficulty:'Easy'
  }]

  return (
    <div className='m-2 p-4'>
      <h1 className='mb-6 font-bold text-3xl'>Courses</h1>
      <div className='flex justify-around flex-wrap'>
      {courses.map((course)=>{
        return <CourseCard key={course.courseId} courseDetails = {course} /> 
      })}
      </div>
    </div>
  )
}

export default Body