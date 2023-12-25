import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <Flex p={4}>
      <InputGroup>
        <InputLeftElement>
          <MdSearch size={25} />
        </InputLeftElement>
        <Input placeholder="Search note" />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
