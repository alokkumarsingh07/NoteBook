// import React, { useState } from "react";
// import { useNotebook } from "./NoteBookContext";

// const Modal = ({ onClose }) => {
//   const { addNote } = useNotebook();
//   const [noteTitle, setNoteTitle] = useState("");
//   const [noteContent, setNoteContent] = useState("");

//   const handleAddNote = () => {
//     addNote({
//       id: Date.now(),
//       title: noteTitle,
//       content: noteContent,
//     });
//     onClose();
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="txt">Note Title: </label>
//         <input
//           id="txt"
//           type="text"
//           placeholder="Note Title"
//           value={noteTitle}
//           onChange={(e) => setNoteTitle(e.target.value)}
//         />
//         <br />
//         <label htmlFor="cnt">Note Content: </label>
//         <textarea
//           id="cnt"
//           placeholder="Note Content"
//           value={noteContent}
//           onChange={(e) => setNoteContent(e.target.value)}
//         />
//         <br />
//         <button onClick={handleAddNote}>Add to Book</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

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
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            background: "#111",
            height: 150,
            width: 240,
            margin: "auto",
            padding: "2%",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "2px solid black",
          }}
        >
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
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
