import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { MdMoreVert } from "react-icons/md";

const MenuToggle = () => {
  return (
    <Box hideFrom={"sm"}>
      <Menu>
        <MenuButton
          as={IconButton}
          variant="ghost"
          aria-label="Options"
          icon={<MdMoreVert />}
        />
        <MenuList>
          <MenuItem
            as={Link}
            to="/">
            All Notes
          </MenuItem>
          <MenuItem
            as={Link}
            to="/archived">
            Archived Notes
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuToggle;
