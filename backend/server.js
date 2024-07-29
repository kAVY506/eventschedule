const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
const port = 4568;
const mongoUrl = "mongodb+srv://kavyareddyamanaganti:kavyareddyamanaganti@cluster0.gi30zmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(mongoUrl, {})
mongoose.connection.on('connected',()=>{
    console.log("mongoDb is connect successfully")
})
const eventRoute = require('./routes/eventroute')
const userRoute = require('./routes/userroute')
app.use('/event', eventRoute)
app.use('/kavya', userRoute)
app.listen(port,()=>{
    console.log("port connected successfully at" + port)
})