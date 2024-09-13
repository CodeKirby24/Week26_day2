const express = require('express')
const mongoose = require('mongoose')
const server = 'mongodb://localhost:27017'
const cors = require('cors')

const app =  express()


app.use(express.json())
app.use(cors());

var nbaSchema = new mongoose.Schema({
    name:String,
    wins:Number,
    losses:Number
})

let model = new mongoose.model('teams', nbaSchema)


app.get('/test/teams', async(req, res) => {
    try{
    await mongoose.connect(server);
    let data = await model.find();
    res.status(200).json(data.Team);
    console.log(data);
} catch(e){
    console.error(e)
} finally{
    await mongoose.disconnect(server)
}})

app.listen(3000, () => {
    console.log('Server is listen on port 3000')
})