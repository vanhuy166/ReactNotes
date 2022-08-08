import React, { useState } from "react";
import "./styles.scss";

interface Iprops{
  handleAddNote: any;
}

function AddNote(props:Iprops) {
  const [noteText, setNoteText] = useState<string>("");

  const charLimit:number = 300;

  const handleChange = (event : any) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      props.handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols={10}
        rows={8}
        placeholder="Type to add a new note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
