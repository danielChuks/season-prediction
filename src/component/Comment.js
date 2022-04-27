import React from 'react'

const getTime = () => {
    return (new Date()).toLocaleTimeString();
  }

const times = getTime(); 

const style = {
  display: "flex",
  justifyContent: 'center',
  color: "green",
  marginTop: '100px',
}

const Comment = (props) => {
  return (
    <>
     <div style={style}>
        <h1> {props.author} </h1>
        <h1> {times} </h1>
     </div>
    </>
   
  )
}


export default Comment;