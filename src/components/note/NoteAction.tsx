import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import {
  MdMoreVert,
  MdOutlineArchive,
  MdOutlineDelete,
  MdOutlineRestore,
} from "react-icons/md";

interface Props {
  id: string;
  archived: boolean;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
  onRestore: (id: string) => void;
}

const NoteAction = ({
  id,
  archived,
  onArchive,
  onDelete,
  onRestore,
}: Props) => {
  return (
    <Menu>
      <MenuButton
        _hover={{ bg: "gray.300" }}
        as={IconButton}
        variant="ghost"
        aria-label="Options"
        icon={<MdMoreVert />}
      />
      <MenuList>
        {!archived && (
          <MenuItem
            icon={<MdOutlineArchive />}
            onClick={() => onArchive(id)}>
            Archive
          </MenuItem>
        )}
        {archived && (
          <MenuItem
            icon={<MdOutlineRestore />}
            onClick={() => onRestore(id)}>
            Restore
          </MenuItem>
        )}
        <MenuItem
          icon={<MdOutlineDelete />}
          onClick={() => onDelete(id)}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NoteAction;
