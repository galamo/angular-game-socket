const express = require("express");
const TaskModel = require("../models/Task")
const router = express.Router();


router.get("/", async (req, res, next) => {
    const result = await TaskModel.find({}).populate('user')
    // const result = await TaskModel.find({})
    return res.json({ result })
})


// DONT DO THIS NEVER - YOU WILL FAILED
let gen = 1;
router.get("/createTask", async (req, res, next) => {
    const newTask = new TaskModel({
        task: `Navigation bar design ${++gen}`,
        user: "5e540efabce5bd81192185b2"
    })
    newTask.save();
    return res.send("tasks")
})



module.exports = router;