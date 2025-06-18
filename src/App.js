import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import { supabase } from "./supabaseClient";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  // Load notes from Supabase
  useEffect(() => {
    fetchNotes();
  }, []);

  // Save notes to Supabase whenever they change
  const fetchNotes = async() => {
    const { data, error } = await supabase
        .from("notes")
        .select("*")
        .order("id", { ascending: false });
      if (error) console.error(error);
      else setNotes(data);
  };

  // Add a new note
  const addNote = async ({ title, text }) => {
    const { data, error } = await supabase
      .from("notes")
      .insert([{ id: Date.now(), title, text }]);
    if (error) console.error(error);
    else fetchNotes();
  };

  // Delete note
  const deleteNote = async (id) => {
    const { error } = await supabase.from("notes").delete().eq("id", id);
    if (error) console.error(error);
    else fetchNotes();
  };

  // Update note
    const updateNote = async (id, newTitle, newText) => {
      const { error } = await supabase
        .from("notes")
        .update({ title: newTitle, text: newText })
        .eq("id", id);
      if (error) console.error(error);
      else fetchNotes();
    };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <div className="notes-list">
        {notes.length === 0 ? (
          <p>No notes yet...</p>
        ) : (
          notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
