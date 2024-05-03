import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  
  const notesInitial = [
    {
      "_id": "663372a416772507c8d413e3",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "My Title",
      "content": "Please wake up early",
      "tag": "Personal",
      "date": "1714647716254",
      "__v": 0
    },
    {
      "_id": "6635168f768f6dd3bf8511e34",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "hero",
      "content": "hero is the one who wins",
      "tag": "general",
      "date": "1714755215899",
      "__v": 0
    },
    {
      "_id": "663372a4167725079c8d413e3",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "My Title",
      "content": "Please wake up early",
      "tag": "Personal",
      "date": "1714647716254",
      "__v": 0
    },
    {
      "_id": "663372a4162772507c8d413e3",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "My Title",
      "content": "Please wake up early",
      "tag": "Personal",
      "date": "1714647716254",
      "__v": 0
    },
    {
      "_id": "663372a4167725807c8d413e3",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "My Title",
      "content": "Please wake up early",
      "tag": "Personal",
      "date": "1714647716254",
      "__v": 0
    },
    {
      "_id": "663372a4156772507c8d413e3",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "My Title",
      "content": "Please wake up early",
      "tag": "Personal",
      "date": "1714647716254",
      "__v": 0
    },
    {
      "_id": "663372a4167772507c8d413e3",
      "user": "65f5acb22fd26a404a9ac13e",
      "title": "My Title",
      "content": "Please wake up early",
      "tag": "Personal",
      "date": "1714647716254",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)
  
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
