import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function About() {
  // const a = useContext(NoteContext);
  // useEffect(() => {
  //   a.update();
  // }, []);

  return (
    <div className="items-center justify-center flex">
      About PAGE {/* {a.state.name} */}
    </div>
  );
}
