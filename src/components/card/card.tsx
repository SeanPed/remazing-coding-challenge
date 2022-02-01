import { useState } from "react";
import styled from "styled-components";
import Cardmenu from "./cardmenu";

type CardProps = {
  logo: string;
};

export default function Card({ logo }: CardProps): JSX.Element {
  const [showCardmenu, setShowCardmenu] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setShowCardmenu(true)}
      onMouseLeave={() => setShowCardmenu(false)}
    >
      {showCardmenu ? (
        <Cardmenu />
      ) : (
        <BrandLogoContainer>
          <BrandLogo src={logo} />
        </BrandLogoContainer>
      )}
    </CardContainer>
  );
}

const CardContainer = styled("div")`
  height: 250px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px #e6eaee;
  background-color: #ffffff;
  border-radius-top: 10px;
  padding: 20px 20px;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const BrandLogoContainer = styled("div")``;

const BrandLogo = styled("img")`
  width: 80%;
`;
