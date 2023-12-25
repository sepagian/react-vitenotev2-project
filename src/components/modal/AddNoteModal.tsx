import {
  Button,
  FormControl,
  FormHelperText,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  Card,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const AddNoteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        p={8}
        gap={2}
        _hover={{ bg: "gray.200" }}
        variant={"outline"}
        as={"button"}
        onClick={onOpen}
        align={"center"}
        justifyContent={"center"}>
        <Icon
          as={MdAdd}
          w={12}
          h={12}
          color={"gray.600"}
        />
        <Heading
          size={"md"}
          color={"gray.600"}>
          Add New Note
        </Heading>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note</ModalHeader>
          <ModalBody>
            <FormControl>
              <Input
                placeholder="Enter your note title"
                size={"md"}
              />
              <Flex justifyContent={"space-between"}>
                <FormHelperText>{`0/50`}</FormHelperText>
              </Flex>
              <Textarea
                placeholder="Enter your note body"
                mt={4}
              />
              <Flex justifyContent={"space-between"}>
                <FormHelperText textAlign={"end"}>{`0/280`}</FormHelperText>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNoteModal;
