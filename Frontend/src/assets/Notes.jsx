import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
  }, []);

  const [enable, setEnable] = useState(false);
  const ref = useRef(null);
  const refclose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Updating the note ...", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click();
    // addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className={
          enable
            ? "bg-gray-200 flex items-center justify-center h-screen overflow-hidden"
            : "bg-gray-200  items-center justify-center h-screen hidden"
        }
      >
        <button
          className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full hidden"
          onClick={() => setEnable(!enable)}
          ref={ref}
        >
          Open Modal
        </button>

        <div
          className={
            enable
              ? "modal-content py-4 text-left px-6 bg-[#faebd7] w-[50%] mx-auto"
              : "modal-content py-4 text-left px-6 bg-[#faebd7]  hidden"
          }
        >
          {/* <!--Title--> */}
          <div className="flex justify-between items-center pb-3">
            <p className="mx-auto text-lg">Edit Note</p>
            <div
              className="modal-close cursor-pointer z-50"
              onClick={() => setEnable(!enable)}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          <div className="w-full max-w-xs mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="etitle"
                  type="text"
                  placeholder="title"
                  name="etitle"
                  onChange={onChange}
                  value={note.etitle}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Description
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="edescription"
                  type="text"
                  placeholder="description"
                  name="edescription"
                  onChange={onChange}
                  value={note.edescription}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Tag
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="etag"
                  type="text"
                  placeholder="tag"
                  name="etag"
                  onChange={onChange}
                  value={note.etag}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className=""
                  onClick={() => setEnable(!enable)}
                  ref={refclose}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleClick}
                >
                  Update Note
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className={enable ? "hidden" : ""}>
        <AddNote />
      </div>
      <div
        className={
          enable
            ? "w-full max-w-[65rem] mx-auto flex-wrap flex-row my-3 justify-center columns-3 space-x-3 hidden"
            : "w-full max-w-[65rem] mx-auto flex flex-wrap flex-row my-3 justify-center columns-3 space-x-3"
        }
      >
        {notes.map((note, index) => {
          return <Noteitem key={index} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
}
