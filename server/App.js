const express = require("express");
const mongoose = require("mongoose");
const eventModel = require("./Models/eventModel");
const admin2Model = require("./Models/admin2Model");
const adminEventModel = require("./Models/adminEventModel");
const  adminServicesModel = require("./Models/adminServicesModel");
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

// CREATE ADMIN2  
app.post("/admin2s", async(req, res)=>{
  try {
     const admin2 = await admin2Model.create(req.body)
     res.status(200).json(admin2)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ ADMIN2
app.get("/admin2s", async(req, res)=>{
  try {
     const admin2 = await admin2Model.find(req.body)
     res.status(200).json(admin2)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE ADMINE$EvENT  
app.post("/adminEvents", async(req, res)=>{
  try {
     const adminEvent = await adminEventModel.create(req.body)
     res.status(200).json(adminEvent)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ ADMINEVENT
app.get("/adminEvents", async(req, res)=>{
  try {
     const adminEvent = await adminEventModel.find(req.body)
     res.status(200).json(adminEvent)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE ADMINSERVICES  
app.post("/adminServices", async(req, res)=>{
  try {
     const adminServices = await adminServicesModel.create(req.body)
     res.status(200).json(adminServices)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ ADMINSERVICES
app.get("/adminServices", async(req, res)=>{
  try {
     const adminServices = await adminServicesModel.find(req.body)
     res.status(200).json(adminServices)
  } catch (error) {
      res.status(500).json({error})
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
  