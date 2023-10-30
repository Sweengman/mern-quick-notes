const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/:id', ensureLoggedIn, notesCtrl.viewNotes)

router.post('/new', ensureLoggedIn, notesCtrl.create)



module.exports = router

