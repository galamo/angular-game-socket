const express = require("express");
const UsersModel = require("../models/User")

const router = express.Router();


router.post("/register", async (req, res, next) => {
    const { name, email, password } = req.body;

    const result = await saveUser({ name, email, password })
    if (!result) return next(new Error("error message"))
    return res.json({ message: "User Registered" })
})

router.post("/login", async (req, res, next) => {
    const { name, email, password } = req.body;
    const result = await UsersModel.find({ email });
    if (typeof result === "object") {
        return res.json(result)
    }
    return res.status(404).send("User not found")

})


async function saveUser(user) {
    const newUser = new UsersModel({ ...user })
    try {
        const dbRes = await newUser.save();
        return dbRes;
    } catch (ex) {
        console.log(ex.message)
        console.log("user is not saved..")
        return;
    }
}

module.exports = router;