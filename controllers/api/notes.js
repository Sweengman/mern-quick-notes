const User = require('../../models/user')
const Note = require('../../models/note')

module.exports = {
    create,
    viewNotes
}

async function create(req, res, next) {
    try {
        console.log(req.body)
        const note = await Note.create(req.body)
        const user = await User.findById(note.user)
        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function viewNotes(req, res, next) {
    try {
        const user = await User.find({email: req.params.id})
        const notes = [...await Note.find({user: user._id})]
        res.json(notes)
    } catch (err) {
        console.error(err)
    }
}