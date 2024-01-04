import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import NoteList from "./components/note/NoteList";
import NoteDetail from "./components/note/NoteDetail";
import { useNoteStore, useSearchStore } from "./stores";
import { useEffect } from "react";

function App() {
  const {
    addNote,
    archiveNote,
    restoreNote,
    deleteNote,
    getArchivedNotes,
    getActiveNotes,
    getNoteDetail,
    editNote,
  } = useNoteStore();
  const { searchInput } = useSearchStore();

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={getActiveNotes(searchInput)}
              showAddButton={true}
              onAdd={addNote}
              onArchive={archiveNote}
              onDelete={deleteNote}
              onRestore={restoreNote}
            />
          }
        />
        <Route
          path="/archived"
          element={
            <NoteList
              notes={getArchivedNotes(searchInput)}
              showAddButton={false}
              onAdd={addNote}
              onArchive={archiveNote}
              onDelete={deleteNote}
              onRestore={restoreNote}
            />
          }
        />
        <Route
          path="/:id"
          element={<NoteDetail getNote={getNoteDetail} editNote={editNote} />}
        />
      </Routes>
    </>
  );
}

export default App;
