import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.scss";
import { NotesList, Header, Search } from "./components";

function App() {
  const [notes, setNotes] =useState<object[]>(() => {

      const savedNotes =localStorage.getItem("react-notes-app-data");
      if (savedNotes) {
        return JSON.parse(savedNotes);
      } else {
        return [];
      }
    });
  const [searchNote, setSearchNote] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text:string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deletingNote = (id:string) => {
    const newNotes = notes.filter((note:any) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />

        <Search handleSearch={setSearchNote} />

        <NotesList
          notes={notes.filter((note:any) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;
