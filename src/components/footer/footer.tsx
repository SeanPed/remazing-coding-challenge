import React from "react";
import styled from "styled-components";

export default function Footer(): JSX.Element {
  return (
    <FooterArea>
      <FooterContentLeft>
        <p>© 2019 All Rights Reserved | Remazing</p>
      </FooterContentLeft>
      <FooterContentRight>
        <p>Terms & Conditions | Privacy Policy </p>
      </FooterContentRight>
    </FooterArea>
  );
}

const FooterArea = styled("div")`
  display: flex;
    align-items: center;
  justify-content: space-between;
  height: 5vh;
  border: 1px solid #dfe2e5;
  background-color: #eff1fa;
`;

const FooterContentLeft = styled("div")`
  padding-left: 40px;
  color: #486277;
  font-size: 1.2em;
  font-weight: 100;
`;
const FooterContentRight = styled("div")`
  padding-right: 40px;
  color: #486277;
  font-size: 1.2em;
  font-weight: 100;
`;
