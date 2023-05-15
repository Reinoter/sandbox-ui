import React from "react";
import Navbar from "../components/Navbar";
import { getNotes } from "../services/notes/note";
import { Note } from "../services/notes/note.interface";
import ProductView from "./Product";

function Home() {
  const { notes, isLoading, isError } = getNotes();
  if (isError) {
    return <>Error! {isError.message}</>;
  }
  if (isLoading) {
    return <>Loading</>;
  }
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <ProductView />
      {notes.map((note: Note) => {
        return <div>{note.title}</div>;
      })}
    </div>
  );
}

export default Home;
