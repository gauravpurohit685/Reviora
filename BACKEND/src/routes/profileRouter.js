const express = require("express");
const profileRouter = express.Router();
const User = require("../models/userSchema");
const userAuth = require("../middleware/userAuth");

profileRouter.user("/profile", userAuth);

profileRouter.get("/profile/view", async (req, res) =>{
        try{    
            const {firstName, lastName, emailId} = req.user;

            res.send({firstName, lastName, emailId});
        }
        catch(err){
            res.status(400).send("Error getting the profile: " + err.message);
        }
    }
);

profileRouter.patch("/profile/edit", async (req, res) => {
    try{
        const allowedUpdates = ["firstName","lastName"];
        const isUpdateallowed = Object.keys(req.body).every((k) => allowedUpdates.includes(k));

        if(!isUpdateallowed){
            throw new error("update not allowed!");
        }

        await User.findByIdAndUpdate(req.user._id, req.body);
        res.send("data updated successfully");

    }
    catch(err){
        res.status(400).send("Error updating the user" + err.message);
    }
});

module.exports = profileRouter;