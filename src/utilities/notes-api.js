import sendRequest from './send-request'
const BASE_URL = '/api/notes'

export function addNote(noteData) {
    return sendRequest(BASE_URL + '/new', 'POST', noteData)
}

export function viewNotes(user) {
    return sendRequest(BASE_URL + `/${user.email}`)
}

export function editNote() {

}
