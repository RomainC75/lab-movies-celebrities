const { model, Schema, schemaTypes } = require('mongoose')

const celebritySchema = new Schema({
    name: {type: String, required: true},
    occupation: String,
    catchPhrase: String
})

const Celebrity = model('celebrities',celebritySchema)

module.exports=Celebrity