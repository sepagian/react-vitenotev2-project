import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdArrowBack, MdCancel, MdCheck, MdEdit } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Note } from "../../utils/local-data";
import { showFormattedDate } from "../../utils";

interface Props {
  getNote: (id: string) => Note;
  editNote: (id: string, updatedNotes: Note) => void;
}

const NoteDetail = ({ getNote, editNote }: Props) => {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);

  const note = getNote(id as string);
  const [editedNote, setEditedNote] = useState({ ...note });

  if (!note) {
    return <div>Note not found</div>;
  }

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancleEdit = () => {
    setEditing(false);
    setEditedNote({ ...note });
  };

  const handleSave = () => {
    editNote(id as string, editedNote);
    setEditing(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  return (
    <Container padding={4}>
      <Flex
        mb={2}
        justifyContent={"space-between"}>
        <Button
          variant={"outline"}
          as={Link}
          leftIcon={<MdArrowBack />}
          to={note.archived ? "/archived" : "/"}>
          Back
        </Button>
        <Button
          alignSelf={"flex-end"}
          onClick={editing ? handleCancleEdit : handleEdit}
          leftIcon={editing ? <MdCancel /> : <MdEdit />}>
          {editing ? "Cancel" : "Edit"}
        </Button>
      </Flex>
      {!editing ? (
        <Flex
          gap={4}
          direction={"column"}>
          <Heading>{note.title}</Heading>
          <Text fontSize={"xl"}>{note.body}</Text>
          <Text fontSize={"md"}>
            Last modified: {showFormattedDate({ date: note.createdAt })}
          </Text>
        </Flex>
      ) : (
        <Flex
          gap={4}
          direction={"column"}>
          <Input
            size={"lg"}
            name="title"
            value={editedNote.title}
            onChange={handleInputChange}
          />
          <Textarea
            height={"200px"}
            size={"lg"}
            name="body"
            value={editedNote.body}
            onChange={handleInputChange}
          />
          <Button
            onClick={handleSave}
            leftIcon={<MdCheck />}
            colorScheme="blue">
            Save
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default NoteDetail;
