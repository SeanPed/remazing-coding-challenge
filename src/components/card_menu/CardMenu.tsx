import styled from "styled-components";

export default function CardMenu(): JSX.Element {
  return (
    <CardMenuContainer>
      <CardMenuList>
        <ButtonPlainText>All Phases</ButtonPlainText>
        <ButtonPlainText>Monitoring</ButtonPlainText>
        <ButtonPlainText>Amazon Cases</ButtonPlainText>
        <CardMenuListItem>
          <ButtonRound>Dashboard</ButtonRound>
        </CardMenuListItem>
        <CardMenuListItem>
          <ButtonRound>Product Catalog</ButtonRound>
        </CardMenuListItem>
      </CardMenuList>
    </CardMenuContainer>
  );
}

const CardMenuContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("src/public/images/background_card_menu.jpg");
  background-size: 150px;
  min-width: 100%;
  min-height: 100%;
`;
const CardMenuList = styled("ul")`
  list-style: none;
  margin: 20px;
  padding: 0 0;
  align-items: center;
  justify-content: center;
`;
const CardMenuListItem = styled("li")`
  padding: 0 0;
  padding-bottom: 10px;
`;
const ButtonPlainText = styled("li")`
  padding: 0 0;
  padding-bottom: 10px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  color: #354052;
  &:hover {
    color: #e9812c;
    transform: scale(1.1);
  }
`;
const ButtonRound = styled("button")`
  padding: 0 0;
  padding-bottom: 10px;
  border-radius: 50px;
  background: none;
  color: inherit;
  width: 100%;
  border-color: #dfe3e9;
  padding: 10px;
  font-size: 1em;
  font-weight: 400;
  color: #354052;
  background-color: transparent;
  &:focus {
    color: #ffffff;
    background-color: #e9812c;
    border: none;
    width: 150%;
    margin-left: -35px;
  }
`;
