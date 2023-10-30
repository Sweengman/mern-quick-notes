export default function({ note }) {
    console.log(note)
    return(
        <div>
            <h3>Note</h3>
            { note.createdAt ?
                <p>{note.text} {new Date(note.createdAt).toLocaleDateString()}</p>
                : <p>Loading...</p>
            }
        </div>
    )
}