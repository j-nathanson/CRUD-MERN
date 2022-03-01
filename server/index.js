const express = require('express')
const mongoose = require('mongoose')
const app = express()

// import model
const FoodModel = require('./models/Food')

// puts parsed data in req.body.
app.use(express.json())

// connect to cloud server throwaway password. 
mongoose.connect('mongodb+srv://newuser:uxGmF423mwI4WKcf@crud.r0dg1.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// on the homepage
app.get('/', async (req, res) => {

    const food = new FoodModel({
        foodName: "Apple",
        daysSinceIAte: 3
    })
    try {
        // attempt to save food to the collection
        await food.save();
        res.send('inserted data')
    } catch (err) {
        console.log(err)
    }


})


app.listen(3001, () => {
    console.log('Server running on port 3001');
})