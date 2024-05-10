import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // fetch all note

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };
  
  const addNote = async (title, content, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, content, tag }),
      });
      if (!response.ok) {
        throw new Error('Failed to add note');
      }
      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };
  
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete note');
      }
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  
  const editNote = async (id, title, content, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, content, tag }),
      });
      if (!response.ok) {
        throw new Error('Failed to edit note');
      }
      const json = await response.json();
      console.log(json);
      const newNotes = notes.map((note) => {
        if (note._id === id) {
          return { ...note, title, content, tag };
        }
        return note;
      });
      setNotes(newNotes);
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };
  
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
