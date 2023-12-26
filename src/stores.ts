import { create } from "zustand";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  unarchiveNote,
} from "./utils/local-data";
import { Note } from "./utils/local-data";

interface NoteStore {
  notes: Note[];
  loadNote: () => void;
  addNote: (note: { title: string; body: string }) => void;
  archiveNote: (id: string) => void;
  restoreNote: (id: string) => void;
  deleteNote: (id: string) => void;
  getArchivedNotes: (searchInput: string) => Note[];
  getActiveNotes: (searchInput: string) => Note[];
  getNoteDetail: (id: string) => Note;
  editNote: (id: string, updatedNotes: Note) => void;
}

interface SearchStore {
  searchInput: string;
  setSearchInput: (value: string) => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],

  loadNote: () => {
    const allNotes = getAllNotes();
    allNotes.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    set({ notes: allNotes });
  },

  addNote: (note) => {
    addNote(note.title, note.body);
    const updatedNotes = getAllNotes();
    set({ notes: updatedNotes });
  },

  archiveNote: (id) => {
    archiveNote(id);
    const updatedNotes = getAllNotes();
    set({ notes: updatedNotes });
  },

  restoreNote: (id) => {
    unarchiveNote(id);
    const updatedNotes = getAllNotes();
    set({ notes: updatedNotes });
  },

  deleteNote: (id) => {
    deleteNote(id);
    const updatedNotes = getAllNotes();
    set({ notes: updatedNotes });
  },

  editNote: (id: string, updatedNote: Note) => {
    const notes = getAllNotes();
    const index = notes.findIndex((note) => note.id === id);
    notes[index] = {
      ...updatedNote,
      id,
      createdAt: new Date().toISOString(),
    };
    set({ notes: notes });
  },

  getActiveNotes: (searchInput: string) => {
    const filteredNotes = getActiveNotes()
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      .filter((note) => {
        return note.title.toLowerCase().includes(searchInput.toLowerCase());
      });
    return filteredNotes;
  },

  getArchivedNotes: (searchInput: string) => {
    const archivedNotes = getArchivedNotes()
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      .filter((note) => {
        return note.title.toLowerCase().includes(searchInput.toLowerCase());
      });
    return archivedNotes;
  },

  getNoteDetail: (id: string) => {
    const foundedNote = getAllNotes().find((note: Note) => note.id === id);
    if (!foundedNote) {
      return {
        id: "",
        title: "",
        body: "",
        createdAt: "",
        archived: false,
      };
    }
    return foundedNote;
  },
}));

export const useSearchStore = create<SearchStore>((set) => ({
  searchInput: "",
  setSearchInput: (value) => set({ searchInput: value }),
}));
