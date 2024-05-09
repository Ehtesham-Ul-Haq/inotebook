import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // fetch all note

  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWFjYjIyZmQyNmE0MDRhOWFjMTNlIn0sImlhdCI6MTcxNDU4NTIwM30.J8EYnEivTyB1d45wqw6K0gdo_jh44Vagwcra_3sQSWA",
      },
    });
    const json = await response.json();
    setNotes(json)
  };


  
  // add note
  
  const addNote = async (title, content, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWFjYjIyZmQyNmE0MDRhOWFjMTNlIn0sImlhdCI6MTcxNDU4NTIwM30.J8EYnEivTyB1d45wqw6K0gdo_jh44Vagwcra_3sQSWA",
      },
      body: JSON.stringify({ title, content, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // delete a note

  const deleteNote = async (id) => {
    //  API Call
    const response = await fetch(`${host}/api/notes//deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWFjYjIyZmQyNmE0MDRhOWFjMTNlIn0sImlhdCI6MTcxNDU4NTIwM30.J8EYnEivTyB1d45wqw6K0gdo_jh44Vagwcra_3sQSWA",
      },
    });
    const json = await response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a note

  const editNote = async (id, title, content, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWFjYjIyZmQyNmE0MDRhOWFjMTNlIn0sImlhdCI6MTcxNDU4NTIwM30.J8EYnEivTyB1d45wqw6K0gdo_jh44Vagwcra_3sQSWA",
      },
      body: JSON.stringify({ title, content, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));

    // logic to edit in note

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].content = content;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
