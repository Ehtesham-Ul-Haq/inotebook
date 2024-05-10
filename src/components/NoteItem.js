import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3 position-relative">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="position-absolute top-0 end-0">
                            <i className="fa fa-trash mx-2" style={{ color: "#FF0000", fontWeight: "lighter"}} onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted Successfully", "success") }}></i>
                            <i className="fa fa-pen mx-2" style={{ color: "#307F0A"}} onClick={()=>{updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.content}</p>
                    <p className="card-text"><i className="fa fa-hashtag mx-2" style={{ color: "#FF0006"}}></i>{note.tag}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
