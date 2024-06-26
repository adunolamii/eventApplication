const express = require("express");
const mongoose = require("mongoose");
const eventModel = require("./Models/eventModel");
const admin2Model = require("./Models/admin2Model");
const adminEventModel = require("./Models/adminEventModel");
const adminUpcomingModel = require("./Models/adminUpcomingModel");
const adminDiscoverModel = require("./Models/adminDiscoverModel");
const adminEntertainmentModel = require("./Models/adminEntertainmentModel")
const adminEventVModel = require("./Models/adminEventVModel")
const adminLocationModel = require("./Models/adminLocationModel")
const adminDjModel = require("./Models/adminDjModel")
const adminMcModel = require("./Models/adminMcModel")
const adminComedianModel = require("./Models/adminComedianModel")
const adminDancerModel = require("./Models/adminDancerModel")
const adminMusicModel = require("./Models/adminMusicModel")
const adminEngineerModel = require("./Models/adminEngineerModel")
const adminVideoModel = require("./Models/adminVideoModel")
// const adminSoundModel = require("./Models/adminSoundModel")
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
  const {id} = req.params
    try {
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


// CREATE adminLOCATION
app.post("/adminLocations", async(req, res)=>{
  try {
     const adminLocation = await adminLocationModel.create(req.body)
     res.status(200).json(adminLocationModel)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminLOCATION
app.get("/adminLocations", async(req, res)=>{
  try {
     const adminLocation = await adminLocationModel.find(req.body)
     res.status(200).json(adminLocation)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminDJ
app.post("/adminDjs", async(req, res)=>{
  try {
    const adminDj = await adminDjModel.create(req.body)
     res.status(200).json(adminDj)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminDJ
app.get("/adminDjs", async(req, res)=>{
  try {
     const adminDj = await adminDjModel.find(req.body)
     res.status(200).json(adminDj)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminMC
app.post("/adminMcs", async(req, res)=>{
  try {
    const adminMc = await adminMcModel.create(req.body)
     res.status(200).json(adminMc)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminMc
app.get("/adminMcs", async(req, res)=>{
  try {
     const adminMc = await adminMcModel.find(req.body)
     res.status(200).json(adminMc)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminComedian
app.post("/adminComedians", async(req, res)=>{
  try {
    const adminComedian = await adminComedianModel.create(req.body)
     res.status(200).json(adminComedian)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminCOMEDIAN
app.get("/adminComedians", async(req, res)=>{
  try {
     const adminComedian = await adminComedianModel.find(req.body)
     res.status(200).json(adminComedian)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminComedian
app.post("/adminComedians", async(req, res)=>{
  try {
    const adminComedian = await adminComedianModel.create(req.body)
     res.status(200).json(adminComedian)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ // CREATE adminComedian
app.post("/adminComedians", async(req, res)=>{
  try {
    const adminComedian = await adminComedianModel.create(req.body)
     res.status(200).json(adminComedian)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminDANCER
app.post("/adminDancers", async(req, res)=>{
  try {
    const adminDancer = await adminDancerModel.create(req.body)
     res.status(200).json(adminDancer)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminDANCER
app.get("/adminDancers", async(req, res)=>{
  try {
     const adminDancer = await adminDancerModel.find(req.body)
     res.status(200).json(adminDancer)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminMUSIC
app.post("/adminMusics", async(req, res)=>{
  try {
    const adminMusic = await adminMusicModel.create(req.body)
     res.status(200).json(adminMusic)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminMUSIC
app.get("/adminMusics", async(req, res)=>{
  try {
     const adminMusic = await adminMusicModel.find(req.body)
     res.status(200).json(adminMusic)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminENGINEER
app.post("/adminEngineers", async(req, res)=>{
  try {
    const adminEngineer = await adminEngineerModel.create(req.body)
     res.status(200).json(adminEngineer)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminENGINEER
app.get("/adminEngineers", async(req, res)=>{
  try {
     const adminEngineer = await adminEngineerModel.find(req.body)
     res.status(200).json(adminEngineer)
  } catch (error) {
      res.status(500).json({error})
  }
})

// CREATE adminVIDEO
app.post("/adminVideos", async(req, res)=>{
  try {
    const adminVideo = await adminVideo.create(req.body)
     res.status(200).json(adminVideo)
  } catch (error) {
      res.status(500).json({error})
  }
})
// READ adminVIDEO
app.get("/adminVideos", async(req, res)=>{
  try {
     const adminVideo= await adminVideoModel.find(req.body)
     res.status(200).json(adminVideo)
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
  