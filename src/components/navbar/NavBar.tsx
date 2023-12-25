import { Divider, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

const NavBar = () => {
  return (
    <Flex
      px={4}
      pt={4}
      justifyContent={"space-between"}>
      <HStack>
        <Image
          src="/vite.svg"
          alt="Vite Logo"
        />
        <Heading
          size="md"
          fontWeight={"normal"}>
          ViteNote V2
        </Heading>
        <Divider orientation="vertical" />
        <MenuLinks />
      </HStack>
      <MenuToggle />
    </Flex>
  );
};

export default NavBar;
