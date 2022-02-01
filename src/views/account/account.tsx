import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import Card from "../../components/card/card";
import Cardlist from "../../components/card/cardList";

export default function AccountContentView(): JSX.Element {
  return (
    <AccountArea>
      <AccountAreaHeader>Brands</AccountAreaHeader>
      <AccountAreaSubHeader>
        Your Brands
        <div>
          <IoGrid />
          <GiHamburgerMenu />
        </div>
      </AccountAreaSubHeader>
      <AccountAreaMain>
        <Cardlist />
      </AccountAreaMain>
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
  background-color: #fafafc;
  width: 100%;
  height: 10%;
  font-size: 1.5em;
  border-bottom: 2px solid #e6eaee;
  color: #385483;
  font-weight: bold;
`;

const AccountAreaSubHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  background-color: #e1e2e4;
  width: 100%;
  height: 10%;
  font-size: 1.5em;

  color: #385483;
  font-weight: bold;
`;

const AccountAreaMain = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #7f8fa4;
  font-size: 1.2em;
  background-color: #e1e2e4;
`;
