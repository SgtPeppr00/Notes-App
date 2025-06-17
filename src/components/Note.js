import React, { useState } from 'react';

function Note({ note, onDelete }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="note">
            <div
                className="note-header"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
            >
                <strong>{note.title || "Untitled Note"}</strong>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div className="note-body">
                    <p>{note.text}</p>
                    <button onClick={() => onDelete(note.id)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default Note;

// This component represents a single note. It displays the note text and includes a button to delete the note.
