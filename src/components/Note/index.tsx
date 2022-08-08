import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

interface Iprops{
  id:string,
  text:string,
  date:string,
  handleDelete:any,
}

function Note(props:Iprops) {
  return (
    <div className="note">
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <FontAwesomeIcon
          onClick={() => props.handleDelete(props.id)}
          className="delete-icon"
          icon={faTrashCan}
        />
      </div>
    </div>
  );
}

export default Note;
