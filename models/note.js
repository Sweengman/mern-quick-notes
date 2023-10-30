const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    text: String,
    user: Schema.Types.ObjectId, 
},
{
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)