import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  // get all notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDNjYzhkMTdjZDhmOGM5ZjNlOTBiIn0sImlhdCI6MTY4MDY4NjI4MH0.7RR3D32X6jQawQOElkXu1JWwD0V_gYq4rDnrp5ozkhQ",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDNjYzhkMTdjZDhmOGM5ZjNlOTBiIn0sImlhdCI6MTY4MDY4NjI4MH0.7RR3D32X6jQawQOElkXu1JWwD0V_gYq4rDnrp5ozkhQ",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json();

    console.log("Adding a new note");
    const note = {
      _id: "6431effc856080e053dabd3a",
      user: "642d3cc8d17cd8f8c9f3e90b",
      title: title,
      description: description,
      tag: tag,
      date: "2023-04-08T22:51:40.173Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id, title, description, tag) => {
    //TODO: API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDNjYzhkMTdjZDhmOGM5ZjNlOTBiIn0sImlhdCI6MTY4MDY4NjI4MH0.7RR3D32X6jQawQOElkXu1JWwD0V_gYq4rDnrp5ozkhQ",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json();
    console.log(json);

    console.log("deleting note : " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDNjYzhkMTdjZDhmOGM5ZjNlOTBiIn0sImlhdCI6MTY4MDY4NjI4MH0.7RR3D32X6jQawQOElkXu1JWwD0V_gYq4rDnrp5ozkhQ",
      },
      body: JSON.stringify({ id, title, description, tag }), // body data type must match "Content-Type" header
    });

    // const json = await response.json();
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id == id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // const s1 = {
  //   name: "Harry",
  //   class: "5B",
  // };
  // const [state, setState] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "Larry",
  //       class: "10b",
  //     });
  //   }, 1000);
  // };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
