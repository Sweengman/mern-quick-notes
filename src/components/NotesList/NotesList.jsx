import Note from '../Note/Note'


export default function NotesList({ notes }) {
        console.log(notes)
    return(
        <section>
            { notes ?
                notes.map(note => <Note note={note} />)
                : <h2>No notes yet!</h2>
            }
        </section>
    )
}