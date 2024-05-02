const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// Route 1:  Get All the Notes using : GET "/api/notes/fetchallnotes" . Login Required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error occured");
  }
});

// Route 2:  add a Note using : POST "/api/notes/addnote" . Login Required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("content", "Enter a valid content").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, content, tag } = req.body;
      // if errors , return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        content,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error occured");
    }
  }
);

// Route 3:  Update existing Note using : PUT "/api/notes/updatenote" . Login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, content, tag } = req.body;
  try {
    // create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (content) {
      newNote.content = content;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error occured");
  }
});

// Route 4:  Delete existing Note using : DELETE "/api/notes/deletenote" . Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found");
    }
    // allows deletion if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note Deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error occured");
  }
});

module.exports = router;
