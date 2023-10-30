import { Component } from 'react'
import { addNote } from '../../utilities/notes-service'
export default class NoteForm extends Component {
    state = {
        text: '',
        error: ''
}

    handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value,
    })
}
    handleSubmit = async (evt) => {
        evt.preventDefault()

        try {
            const noteData = {...this.state}
            delete noteData.error
            const note = await addNote(noteData) 
        } catch {
            this.setState({error: 'submit failed, request timed out. Please try again'})
        }
        this.setState({
            text: ''
        })
        this.props.notesBinder()
    }
    render() {
        return(
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Note</label>
                    <input type="text" onChange={this.handleChange} value={this.state.text} name='text' />
                    <button type='submit'>Submit</button>
                </form>
                <div></div>
            </aside>
        )
    }
}