import { Card, Flex, Grid, Text } from "@chakra-ui/react";
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
  showAddButton: boolean;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
  onRestore: (id: string) => void;
  onAdd: (note: { title: string; body: string }) => void;
};

const NoteList = (props: Props) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      p={4}
      gap={4}
    >
      {props.showAddButton && <AddNoteModal addNote={props.onAdd} />}
      {props.notes.length === 0 && (
        <Card
          as={Flex}
          p={8}
          gap={2}
          variant={"outline"}
          bg={"gray.50"}
          align={"center"}
          height={{ base: "auto", sm: "150px", md: "240px", lg: "240px" }}
          justifyContent={"center"}
        >
          <Text fontSize={"lg"}>No note exist</Text>
        </Card>
      )}
      {props.notes.map((note) => (
        <NoteCard
          key={note.id}
          onDelete={props.onDelete}
          onArchive={props.onArchive}
          onRestore={props.onRestore}
          {...note}
        />
      ))}
    </Grid>
  );
};

export default NoteList;
