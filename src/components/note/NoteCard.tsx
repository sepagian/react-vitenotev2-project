import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import { showFormattedDate } from "../../utils";
import NoteAction from "./NoteAction";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
  onRestore: (id: string) => void;
}

const NoteCard = (props: Props) => {
  return (
    <GridItem>
      <Card
        variant={"outline"}
        height={{ base: "auto", sm: "150px", md: "240px", lg: "240px" }}
        _hover={{ bg: "gray.100" }}>
        <CardBody>
          <Flex
            justifyContent="space-between"
            pb={2}>
            <Heading
              size="md"
              as={Link}
              to={`/${props.id}`}>
              {props.title}
            </Heading>
            <NoteAction
              id={props.id}
              archived={props.archived}
              onArchive={props.onArchive}
              onDelete={props.onDelete}
              onRestore={props.onRestore}
            />
          </Flex>
          <Text
            fontSize={"lg"}
            noOfLines={[1, 2, 3]}>
            {props.body}
          </Text>
        </CardBody>
        <CardFooter>
          <Text>{showFormattedDate({ date: props.createdAt })}</Text>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default NoteCard;
