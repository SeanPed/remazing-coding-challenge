import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

type SearchbarProps = {
  setValue: (value: string) => void;
};

export default function Searchbar({ setValue }: SearchbarProps): JSX.Element {
  return (
    <SearchbarContainer>
      <SearchInput
        type="text"
        placeholder="Search brands..."
        onChange={(event) => setValue(event.target.value)}
      />
      <BsSearch />
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled("div")`
  display: flex;
  align-items: center;
  border: 2px solid grey;
  border-radius: 5px;
  padding-right: 10px;
  margin-left: -55px;
  color: #a0a6ae;
  width: 42%;
  height: 40px;
`;

const SearchInput = styled("input")`
  height: 25px;
  width: 100%;
  padding: 2px 23px 2px 30px;
  border: none;
  outline: 0;
  background-color: transparent;
`;
