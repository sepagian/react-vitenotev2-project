import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import React from "react";
interface Props {
  onSearchInput: (value: string) => void;
}

const SearchBar = ({ onSearchInput }: Props) => {
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    onSearchInput(value);
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
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
