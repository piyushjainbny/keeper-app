import React from 'react';
import { MdDelete } from 'react-icons/md';


import "../App.css";
function Note(props) {
  return (
    <div className='note'>
      <h3 className='noteHeading'>{props.noteHeading}</h3>
      <p className='noteContent'>{props.noteContent}</p>
      <div className='btn-div'>
        <button className='dlt-btn' onClick={() => { props.onDelete(props.id) }}><MdDelete size={35} /></button>
      </div>
    </div>
  )
}
export default Note;