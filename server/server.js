import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import mongoose from 'mongoose'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/notesDB")

const noteSchema = new mongoose.Schema({
    title: String, 
    content: String
})

const Note = new mongoose.model("Note", noteSchema)

const allNotes = [{title: "Prueba", content: "primera prueba"}, {title: "Otra prueba", content: "Segunda prueba"}]

app.get("/", async (req, res) => {
    res.json(allNotes)
})

app.post("/new", (req, res) => {

})



app.listen(port, () => `Server listening on port ${port}`)