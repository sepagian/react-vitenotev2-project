import {
  Button,
  Card,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  body: z.string().min(3, { message: "Body must be at least 3 characters" }),
});

type Note = z.infer<typeof schema>;

interface Props {
  addNote: (note: Note) => void;
}

const AddNoteModal = ({ addNote }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<Note>({ resolver: zodResolver(schema) });

  const onSubmit = (note: Note) => {
    addNote(note);
    reset();
    onClose();
  };

  const onCloseModal = () => {
    reset();
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        p={8}
        gap={2}
        bg={"gray.200"}
        _hover={{ bg: "gray.300" }}
        variant={"outline"}
        as={"button"}
        onClick={onOpen}
        align={"center"}
        height={{ base: "auto", sm: "150px", md: "240px", lg: "240px" }}
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
        onClose={onCloseModal}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add Note</ModalHeader>
            <ModalBody>
              <FormControl>
                <Input
                  {...register("title")}
                  id="title"
                  type="text"
                  maxLength={50}
                  isInvalid={!!errors.title}
                  placeholder="Enter your note title"
                  size={"md"}
                />
                <Flex justifyContent={"space-between"}>
                  <FormHelperText
                    as={Text}
                    color="red.500">
                    {errors.title && errors.title.message}
                  </FormHelperText>
                  <FormHelperText as={Text}>
                    {watch("title") ? `${watch("title").length}/50` : "0/50"}
                  </FormHelperText>
                </Flex>
                <Textarea
                  {...register("body")}
                  id="body"
                  maxLength={280}
                  isInvalid={!!errors.body}
                  placeholder="Enter your note body"
                  mt={4}
                />
                <Flex justifyContent={"space-between"}>
                  <FormHelperText
                    as={Text}
                    color="red.500">
                    {errors.body && errors.body.message}
                  </FormHelperText>
                  <FormHelperText as={Text}>
                    {watch("body") ? `${watch("body").length}/280` : "0/280"}
                  </FormHelperText>
                </Flex>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                mr={3}
                variant={"ghost"}
                onClick={onCloseModal}
                type="button">
                Close
              </Button>
              <Button
                type="submit"
                colorScheme={isValid ? "blue" : "gray"}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default AddNoteModal;
