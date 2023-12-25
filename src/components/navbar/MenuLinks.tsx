import { Box, Stack, Link, Text } from "@chakra-ui/react";

const MenuLinks = () => {
  return (
    <Box
      hideBelow={["sm"]}
      py={2}>
      <Stack
        spacing={4}
        align={"center"}
        direction={"row"}>
        <Link
          href="/"
          textUnderlineOffset={8}>
          <Text>All Notes</Text>
        </Link>
        <Link
          href="/archived"
          textUnderlineOffset={8}>
          <Text>Archived</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
