import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

type SearchbarProps = {
  setValue: () => void;
};

export default function Searchbar({ setValue }: SearchbarProps): JSX.Element {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search brands..."
        onChange={setValue}
      />
      <BsSearch />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled("div")`
  display: flex;
  align-items: center;
  border: 2px solid grey;
  border-radius: 5px;
  padding-right: 10px;
  color: #a0a6ae;
  width: 42%;
  margin-left: -55px; //better Option?
  height: 40px;
`;

const SearchInput = styled("input")`
  height: 25px;
  width: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: transparent;
  border: none;
`;
