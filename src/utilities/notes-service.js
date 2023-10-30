import * as notesAPI from './notes-api'

export async function addNote(noteData) {
    const note = await notesAPI.addNote(noteData)
    return note
}

export async function viewNotes(user) {
    const notes = await notesAPI.viewNotes(user)
    return notes
}