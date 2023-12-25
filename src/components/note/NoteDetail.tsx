import { useParams, Link } from "react-router-dom";
import { Note } from "../../utils/local-data";
import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

interface Props {
  getNote: (id: string) => Note;
}

const NoteDetail = ({ getNote }: Props) => {
  const { id } = useParams();
  const note = getNote(id as string);
  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <Container padding={4}>
      <Button
        variant={"outline"}
        hideFrom={"sm"}
        as={Link}
        leftIcon={<MdArrowBack />}
        to={"/"}
        mb={2}>
        Back
      </Button>
      <Flex
        gap={4}
        direction={"column"}>
        <Heading>{note.title}</Heading>
        <Text fontSize={"xl"}>{note.body}</Text>
      </Flex>
    </Container>
  );
};

export default NoteDetail;
