import React, { createContext, useState, useContext } from "react";

const NotebookContext = createContext();

export const useNotebook = () => {
  return useContext(NotebookContext);
};

export const NotebookProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotebookContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotebookContext.Provider>
  );
};
