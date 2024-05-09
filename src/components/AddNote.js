import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", content: "", tag: "default" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.content, note.tag);
        setNote({ title: "", content: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3">
            <h2>Add Note</h2>
            <form>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea type="text" className="form-control" id="content" name="content" value={note.content} rows="3" onChange={onChange} minLength={5} required></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>

                <button disabled= {note.title.length<5 || note.content.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Save</button>

            </form>
        </div>

    )
}

export default AddNote
