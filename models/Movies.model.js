const { model, Schema, schemaTypes, default: mongoose } = require('mongoose')
const Celebrity = require('./Celebrity.model')

const movieSchema = new Schema({
    title: {type: String, required: true},
    genre: String,
    plot: String,
    cast: [ { type: Schema.Types.ObjectId, ref:Celebrity } ]
})

const Movie = model('movies',movieSchema)

module.exports=Movie