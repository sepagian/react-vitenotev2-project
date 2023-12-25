import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuLinks = () => {
  return (
    <Box
      hideBelow={["sm"]}
      py={2}>
      <Stack
        spacing={4}
        align={"center"}
        direction={"row"}>
        <Link to="/">
          <Text>All Notes</Text>
        </Link>
        <Link to="/archived">
          <Text>Archived</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
