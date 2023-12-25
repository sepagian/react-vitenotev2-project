import { SimpleGrid } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import AddNoteModal from "../modal/AddNoteModal";

interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
}
type Props = {
  notes: Note[];
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
  onRestore: (id: string) => void;
};
const NoteList = (props: Props) => {
  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      spacing={4}
      p={4}>
      <AddNoteModal />
      {props.notes.map((note) => (
        <NoteCard
          key={note.id}
          onDelete={props.onDelete}
          onArchive={props.onArchive}
          onRestore={props.onRestore}
          {...note}
        />
      ))}
    </SimpleGrid>
  );
};

export default NoteList;
