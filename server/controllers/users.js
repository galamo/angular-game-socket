const express = require("express");
const UsersModel = require("../models/User")

const router = express.Router();


router.get("/", async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(111)
    const result = await UsersModel.find({});
    if (!result) return next(new Error("error message"))
    return res.json({ result })
})



module.exports = router;