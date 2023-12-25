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

const noteSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(50, { message: "Title must be at most 50 characters" }),
  body: z
    .string()
    .min(3, { message: "Content must be at least 3 characters" })
    .max(280, { message: "Content must be at most 280 characters" }),
});

type Note = z.infer<typeof noteSchema>;

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
  } = useForm<Note>({ resolver: zodResolver(noteSchema) });

  const onSubmit = (note: Note) => {
    addNote(note);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add Note</ModalHeader>
            <ModalBody>
              <FormControl>
                <Input
                  {...register("title")}
                  maxLength={50}
                  placeholder="Enter your note title"
                  size={"md"}
                />
                <Flex justifyContent={"space-between"}>
                  <FormHelperText as={Text}>
                    {errors.title && errors.title.message}
                  </FormHelperText>
                  <FormHelperText as={Text}>
                    {watch("title") ? `${watch("title").length}/50` : "0/50"}
                  </FormHelperText>
                </Flex>
                <Textarea
                  {...register("body")}
                  maxLength={280}
                  placeholder="Enter your note body"
                  mt={4}
                />
                <Flex justifyContent={"space-between"}>
                  <FormHelperText as={Text}>
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
                variant={"outline"}
                onClick={onClose}
                type="button">
                Close
              </Button>
              <Button
                isDisabled={!isValid}
                colorScheme={isValid ? "blue" : "gray"}
                type="submit">
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
