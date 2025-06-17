import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);
  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // Function to add a new note
  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      title: text.title,
      text: text.text
    };
    setNotes([newNote, ...notes]);
  };
  // Function to delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }
  return (
    <div className = "app">
      <h1>Notes App</h1>
      <NoteForm addNote = {addNote} />
      <div className = "notes-list">
        {notes.length === 0? (
          <p>No notes yet...</p>
        ):(
          notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))
        )}
      </div>
    </div>
  );

}

export default App;
