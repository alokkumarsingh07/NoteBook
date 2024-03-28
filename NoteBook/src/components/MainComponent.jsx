import React, { useState } from "react";
import { useNotebook } from "./NoteBookContext";
import Modal from "./Modal";

const MainComponent = () => {
  const { notes, addNote, deleteNote } = useNotebook();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    deleteNote(id);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      <label htmlFor="snt">Search Note: </label>
      <input
        id="snt"
        type="text"
        placeholder="Search by Note Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Total Notes: {notes.length}</p>
      <p>Showing: {filteredNotes.length}</p>
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <button onClick={() => setShowModal(true)}>Add New Note</button>

      {filteredNotes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MainComponent;
