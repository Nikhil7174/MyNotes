import React, { useContext, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function Noteitem(props) {
  const context = useContext(NoteContext);
  const [enable, setEnable] = useState(false);
  const { deleteNote } = context;
  // const ref = useRef();
  const { note, updateNote } = props;

  // const change = () => {
  //   ref = !ref;
  // };

  // console.log(ref);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg min-w-[20rem] p-5">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{note.title}</div>
          <p className="text-gray-700 text-base">{note.description}</p>
        </div>
        <i
          className="fa-solid fa-trash mx-2 cursor-pointer"
          onClick={() => {
            deleteNote(note._id);
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square mx-2 cursor-pointer"
          onClick={() => {
            updateNote(note);
          }}
        ></i>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </>
  );
}
