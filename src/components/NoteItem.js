import React from "react";

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3 position-relative">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="position-absolute top-0 end-0">
                            <i className="fa fa-trash mx-2" style={{ color: "#FF0000", fontWeight: "lighter", cursor: "pointer" }}></i>
                            <i className="fa fa-pen mx-2" style={{ color: "#307F0A", cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.content}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
