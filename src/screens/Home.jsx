import React, { useState } from 'react';
import Heading from '../components/Heading';
import Note from '../components/Note';
import Footer from '../components/Footer';
import Empty from '../components/Empty'
// import notes from '../notes'
import { BsPencilSquare } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';
import AddNote from '../components/AddNote';
import '../App.css'

function Home() {
  const [showNote, setShowNote] = React.useState(false);
  const [notes, setNotes] = useState([]);
  function reveal() {

    setShowNote((prev) => {
      return (!prev)
    })

    console.log(showNote)
  }
  function addNote(recievedNote) {
    if (recievedNote.title !== '' && recievedNote.content !== '') {
      setNotes((prev) => {
        return [...prev, recievedNote]
      })
      setShowNote(false)
    } else {
      alert('Either title or content is empty!')
    }
  }

  function deleteNote(id) {
    setNotes(prev => {
      return prev.filter((x, y) => {
        return y !== id
      })
    })
  }


  return (
    <div className='container'>
      <Heading func={reveal} btnContent={showNote ? <RxCrossCircled /> : <BsPencilSquare />} />
      {showNote ? <AddNote addNotefunc={addNote} /> : null}
      {notes.length > 0 ? <div className='noteContainer'>
        {notes.map((note, noteIndex) => {
          return (<Note key={noteIndex} id={noteIndex} noteHeading={note.title} noteContent={note.content} onDelete={deleteNote} />)
        }
        )}
      </div> : <Empty />}

      <Footer />
    </div>
  )
}
export default Home;