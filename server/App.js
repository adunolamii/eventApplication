const express = require("express");
const mongoose = require("mongoose");
const eventModel = require("./Models/eventModel");
const dotenv = require("dotenv").config();
const cors = require('cors')


const app = express()

// MIDDLE WARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

// HOME PAGE
app.get("/", (req, res) => {
    res.send("<h1>home page<h1>");
  });

// CREATE
app.post("/events", async(req, res)=>{
    try {
       const event = await eventModel.create(req.body)
       res.status(200).json(event)
    } catch (error) {
        res.status(500).json({error})
    }
})

// READ ALL
app.get("/events", async(req, res)=>{
    try {
       const event = await eventModel.find(req.body)
       res.status(200).json(event)
    } catch (error) {
        res.status(500).json({error})
    }
})
// READ SINGLE
app.get(`/event/:id`, async(req, res)=>{
    try {
        const {id} = req.params
        const event = await eventModel.findById(id)
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json(error)
    }
})

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected successfully")
  })
  .catch((error) => {
    console.log(error);
  });

    app.listen(5001, () => {
    console.log("Now listening");
  });
  