import styled from "styled-components";

export default function Cardmenu(): JSX.Element {
  return (
    <CardMenuContainer>
      <CardMenuList>
        <CardMenuListItem>
          <CardMenuListItemButtonPlainText
            onClick={() => console.log("Function not implemented yet!")}
          >
            All Phases
          </CardMenuListItemButtonPlainText>
        </CardMenuListItem>
        <CardMenuListItem>
          <CardMenuListItemButtonPlainText
            onClick={() => console.log("Function not implemented yet!")}
          >
            Monitoring
          </CardMenuListItemButtonPlainText>
        </CardMenuListItem>
        <CardMenuListItem>
          <CardMenuListItemButtonPlainText
            onClick={() => console.log("Function not implemented yet!")}
          >
            Amazon Cases
          </CardMenuListItemButtonPlainText>
        </CardMenuListItem>
        <CardMenuListItem>
          <CardMenuListItemButtonRound
            onClick={() => console.log("Function not implemented yet!")}
          >
            Dashboard
          </CardMenuListItemButtonRound>
        </CardMenuListItem>
        <CardMenuListItem>
          <CardMenuListItemButtonRound>
            Product Catalog
          </CardMenuListItemButtonRound>
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

const CardMenuListItemButtonPlainText = styled("button")`
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  color: #354052;
`;

const CardMenuListItemButtonRound = styled("button")`
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
  }
`;
