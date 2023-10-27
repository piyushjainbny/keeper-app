import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md'
function AddNote(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })


  function handleInput(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }



  return (
    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
      <div className='add-note'>
        <div className='inputHolder'>
          <input className='text-input' type='text' name='title' onChange={handleInput} placeholder='Note Title...' value={note.title} />
          <input className='text-input' type='text' name='content' onChange={handleInput} placeholder='Note Content...' value={note.content} style={{ fontSize: '20px' }} />
        </div>
        <button className='add-btn' onClick={() => { props.addNotefunc(note); setNote({ title: '', content: '' }) }}><MdAdd size={30} /></button>
      </div>
    </div>
  )
}
export default AddNote;