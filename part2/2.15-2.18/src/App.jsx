import { useEffect, useState } from "react"
import axios from "axios"
import noteService from "./services/notes"

function App() {

  const [notes,setNotes] = useState([])

  useEffect(() => {
      noteService
        .getAll()
        .then(initialNotes => {
          setNotes(initialNotes)
        })
  }, [])

  
    

   const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important:!note.important}
   
    noteService 
      .update(id,changedNote)
      .then(res =>{
        setNotes(notes.map(note => note.id !== id ? note : res))
      })
      .catch(error => {
        alert(`the note ${note.content} was already deleted from server`)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  


  return (
   <div>
    <h1>Hola Mundo</h1>
   </div>
  )
}

export default App
