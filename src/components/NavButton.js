import React from 'react';

const NavButton = ({id,name, setTopicNumber, topicNumber}) => {
  return (
    <button key={id} className={`m-1 p-2 ${topicNumber===id? "bg-green-400" : "bg-green-200"} hover:bg-green-300`} onClick={()=>setTopicNumber(id)}>{name}</button>
  )
}

export default NavButton