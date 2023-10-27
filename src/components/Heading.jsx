import React from 'react';
import { MdHighlight } from 'react-icons/md'

import '../App.css'
function Heading(props) {

  return (
    <div className='header'>
      <h2><MdHighlight />Keeper</h2>
      <button className='addnote-btn' onClick={props.func}>{props.btnContent}</button>
    </div>
  )
}

export default Heading;