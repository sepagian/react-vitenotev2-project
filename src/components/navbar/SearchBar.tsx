import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import React from "react";
import { useSearchStore } from "../../stores";

const SearchBar = () => {
  const { searchInput, setSearchInput } = useSearchStore();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };

  return (
    <Flex p={4}>
      <InputGroup>
        <InputLeftElement>
          <MdSearch size={25} />
        </InputLeftElement>
        <Input
          placeholder="Search note"
          onChange={handleInput}
          value={searchInput}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
