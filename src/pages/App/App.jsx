
import './App.css'; 
import { getUser } from '../../utilities/users-service'
import { viewNotes } from '../../utilities/notes-service'
import { useState, useEffect } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import NotesList from '../../components/NotesList/NotesList'
import NoteForm from '../../components/NoteForm/NoteForm'


export default function App() {

  const [user, setUser] = useState(getUser())
  let [notes, setNotes] = useState(null)
  useEffect(() => notesBinder, [])

  async function notesBinder() {
    let noteData
    try {
      noteData = await viewNotes(user)
    } catch(err) {
      console.error(err)
    } finally {
      if(noteData) {
        setNotes(noteData)
      }
    }
  }

  console.log(notes)
  return (
    <main className="App">
      { user ?
        <> 
          <NavBar user={user} />
          <NotesList notes={notes}/>
          <NoteForm notesBinder={notesBinder} />
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}