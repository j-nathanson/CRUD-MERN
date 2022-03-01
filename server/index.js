const express = require('express')
const mongoose = require('mongoose')
const app = express()

// puts parsed data in req.body.
app.use(express.json())

// connect to cloud server throwaway password
mongoose.connect('mongodb+srv://newuser:uxGmF423mwI4WKcf@crud.r0dg1.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.listen(3001, () => {
    console.log('Server running on port 3001');
})