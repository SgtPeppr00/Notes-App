import React, { useState } from 'react';

function NoteForm ({ addNote }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return;
    addNote({ title, text });
    setTitle("");
    setText("");
  };

    return (
    <form onSubmit={handleSubmit} className="note-form">
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your note..."
        />
        <button type="submit">Add Note</button>
    </form>
    );
}

export default NoteForm;
// This component provides a form to add new notes. It includes a textarea for input and a button to submit the note.
// It uses local state to manage the text input and calls the `addNote` function passed as a prop when the form is submitted.
// The form prevents submission if the input is empty or only contains whitespace.