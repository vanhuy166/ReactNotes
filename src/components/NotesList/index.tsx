import React from "react";
import Note from "../Note";
import AddNote from "../AddNote";

import "./styles.scss";

interface Irops{
  notes: object[];
  handleAddNote:any;
  handleDelete:any;
}

const NotesList = (props:Irops) => {
  return (
    <div className="notes-list">
      {props.notes.map((note:any) => (
        <Note
          id={note.id}
          key={note.id}
          text={note.text}
          date={note.date}
          handleDelete={props.handleDelete}
        />
      ))}
      <AddNote handleAddNote={props.handleAddNote} />
    </div>
  );
};

export default NotesList;
