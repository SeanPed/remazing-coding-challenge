import styled from "styled-components";
import Cardlist from "../../components/card/cardList";

export default function AccountView(): JSX.Element {
  return (
    <AccountArea>
      <AccountAreaHeader>Brands</AccountAreaHeader>
      <AccountAreaContent>
        <Cardlist />
      </AccountAreaContent>
    </AccountArea>
  );
}

const AccountArea = styled("div")`
  width: 100%;
  height: 100%;
  border-right: 1px solid #dfe2e5;
`;

const AccountAreaHeader = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  position: sticky;
  background-color: #fafafc;
  width: 100%;
  height: 8%;
  font-size: 1.5em;
  border-bottom: 2px solid #e6eaee;
  color: #385483;
  font-weight: bold;
`;

const AccountAreaContent = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #7f8fa4;
  font-size: 1.2em;
  background-color: #f5f6fa;
`;
