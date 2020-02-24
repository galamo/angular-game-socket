const express = require("express");

const router = express.Router();


router.get("/", async (req, res, next) => {
    return res.json({ message: "tasks" })
})

router.post("/", async (req, res, next) => {
    return res.send("tasks")
})



module.exports = router;