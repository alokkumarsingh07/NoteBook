import React, { useState } from "react";
import { useNotebook } from "./NoteBookContext";

const Modal = ({ onClose }) => {
  const { addNote } = useNotebook();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleAddNote = () => {
    addNote({
      id: Date.now(),
      title: noteTitle,
      content: noteContent,
    });
    onClose();
  };

  return (
    <div>
      <div>
        <label htmlFor="txt">Note Title: </label>
        <input
          id="txt"
          type="text"
          placeholder="Note Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <br />
        <label htmlFor="cnt">Note Content: </label>
        <textarea
          id="cnt"
          placeholder="Note Content"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        />
        <br />
        <button onClick={handleAddNote}>Add to Book</button>
      </div>
    </div>
  );
};

export default Modal;
