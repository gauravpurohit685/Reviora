const express = require("express");
const Notes = require("../models/notesSchema");
const userAuth = require("../middleware/userAuth");

const notesRouter = express.Router();
notesRouter.use("/notes", userAuth);

notesRouter.get("/notes/view", async (req, res) => {
    try{
        const notes = await Notes.find({
            userId: req.user._id
        }).sort({ createdAt: -1 });

        res.send(notes);
    }
    catch(err){
        res.status(400).send("error getting the notes" + err.message);
    }
});

notesRouter.post("/notes/add", async (req, res) => {
    try{
        const {title, description} = req.body;
        const _id = req.user._id;

        const note = new Notes({
            userId: _id,
            title,
            description
        })

        await note.save();

        res.send("Note saved successfully!");
    }
    catch(err){
        res.status(400).send("Error saving the notes" + err.message);
    }
});

notesRouter.patch("/notes/:noteId", async (req, res) => {

    try{
        const {noteId} = req.params;

        if(!noteId){
            throw new Error("Note not found");
        }

        const allowedUpdates = ["title", "description"];

        const isUpdateAllowed = Object.keys(req.body).every((k) => allowedUpdates.includes(k));

        if(!isUpdateAllowed){
            throw new Error("Update not allowed");
        }

        await Notes.findOneAndUpdate(
        {
            _id: noteId,
            userId: req.user._id
        },
        req.body
        );

        res.send("Note updated successfully");
    }
    catch(err){
        res.status(400).send("Error adding the note" + err.message);
    }
    
});

notesRouter.delete("/notes/:noteId", async (req, res) => {

    try{
        const {noteId} = req.params;

        if(!noteId){
            throw new Error("Note not found");
        }

        await Notes.findOneAndDelete({
            _id: noteId,
            userId: req.user._id
        });

        res.send("Note deleted successfully");
    }
    catch(err){
        res.status(400).send("Error deleting the note" + err.message);
    }

});


module.exports = notesRouter;
