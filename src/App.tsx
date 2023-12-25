import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/navbar/SearchBar";
import NoteList from "./components/note/NoteList";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "./utils/local-data";
import NoteDetail from "./components/note/NoteDetail";

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

  const [searchInput, setSearchInput] = useState("");

  const filteredNotes = getActiveNotes().filter((note) => {
    return note.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const archivedNotes = getArchivedNotes().filter((note) => {
    return note.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <NavBar />
      <SearchBar onSearchInput={setSearchInput} />
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={filteredNotes}
              showAddButton={true}
              onAdd={onAddNote}
              onArchive={onArchiveNote}
              onDelete={onDeleteNote}
              onRestore={onRestoreNote}
            />
          }
        />
        <Route
          path="/archived"
          element={
            <NoteList
              notes={archivedNotes}
              showAddButton={false}
              onAdd={onAddNote}
              onArchive={onArchiveNote}
              onDelete={onDeleteNote}
              onRestore={onRestoreNote}
            />
          }
        />
        <Route
          path="/:id"
          element={<NoteDetail getNote={getNote} />}
        />
      </Routes>
    </>
  );
}

export default App;
