import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

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
          <MenuItem>
            <Link href="/">All Notes</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/archived">Archived Notes</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuToggle;
