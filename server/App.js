const express = require("express");
const mongoose = require("mongoose");
const eventModel = require("./Models/eventModel");
const admin2Model = require("./Models/admin2Model");
const adminEventModel = require("./Models/adminEventModel");
const adminUpcomingModel = require("./Models/adminUpcomingModel");
const adminDiscoverModel = require("./Models/adminDiscoverModel");
const adminEntertainmentModel = require("./Models/adminEntertainmentModel")
const adminEventVModel = require("./Models/adminEventVModel")
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
// GET ADMINEVENT
app.get("/adminEvents", async(req, res)=>{
  try {
     const adminEvent = await adminEventModel.find(req.body)
     res.status(200).json(adminEvent)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE UPCOMINGROUTES  
app.post("/adminUpcomings", async(req, res)=>{
  try {
     const adminUpcoming = await adminUpcomingModel.create(req.body)
     res.status(200).json(adminUpcoming)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ UPCOMINGROUTES
app.get("/adminUpcomings", async(req, res)=>{
  try {
     const adminUpcoming = await adminUpcomingModel.find(req.body)
     res.status(200).json(adminUpcoming)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE DISCOVERROUTES  
app.post("/adminDiscovers", async(req, res)=>{
  try {
     const adminDiscover = await adminDiscoverModel.create(req.body)
     res.status(200).json(adminDiscover)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ DISCOVERS
app.get("/adminDiscovers", async(req, res)=>{
  try {
     const adminDiscover = await adminDiscoverModel.find(req.body)
     res.status(200).json(adminDiscover)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE ENTERTAINMENT  
app.post("/adminEntertainments", async(req, res)=>{
  try {
     const adminEntertainment = await adminEntertainmentModel.create(req.body)
     res.status(200).json(adminEntertainment)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ ENTERTAINMENT
app.get("/adminEntertainments", async(req, res)=>{
  try {
     const adminEntertainment = await adminEntertainmentModel.find(req.body)
     res.status(200).json(adminEntertainment)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminEventV  
app.post("/adminEventVs", async(req, res)=>{
  try {
     const adminEventV = await adminEventVModel.create(req.body)
     res.status(200).json(adminEventVModel)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminEventV
app.get("/adminEventVs", async(req, res)=>{
  try {
     const adminEventV = await adminEventVModel.find(req.body)
     res.status(200).json(adminEventV)
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
  