import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/navbar/SearchBar";
import NoteList from "./components/note/NoteList";
import {
  addNote,
  archiveNote,
  deleteNote,
  getAllNotes,
  unarchiveNote,
} from "./utils/local-data";

function App() {
  const [notes, setNotes] = useState(getAllNotes());
  notes.sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });

  const onAddNote = (note: { title: string; body: string }) => {
    addNote(note.title, note.body);
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  };

  const onArchiveNote = (id: string) => {
    archiveNote(id);
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  };

  const onRestoreNote = (id: string) => {
    unarchiveNote(id);
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  };

  const onDeleteNote = (id: string) => {
    deleteNote(id);
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  };

  return (
    <>
      <NavBar />
      <SearchBar />
      <NoteList
        notes={notes}
        onAdd={onAddNote}
        onArchive={onArchiveNote}
        onDelete={onDeleteNote}
        onRestore={onRestoreNote}
      />
    </>
  );
}

export default App;
