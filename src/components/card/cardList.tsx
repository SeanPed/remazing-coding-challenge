import { useState } from "react";
import styled from "styled-components";
import Card from "./card";

const BrandsData = [
  {
    Name: "Studio Ghibli",
    Logo: "src/public/images/Brand_Logos/Ghibli_brand_logo.jpg",
  },
  {
    Name: "Karpador Inc.",
    Logo: "src/public/images/Brand_Logos/Karpador_brand_logo.jpg",
  },
  {
    Name: "The Mando Corp.",
    Logo: "src/public/images/Brand_Logos/mandalorian_brand_logo.jpg",
  },
  {
    Name: "One does not simply GmbH",
    Logo: "src/public/images/Brand_Logos/oneDoesNotSimply_brand_logo.jpg",
  },
  {
    Name: "Weihnachtsmann und Co. KG",
    Logo: "src/public/images/Brand_Logos/WeihnachtsmannUndCoKg_brand_logo.jpg",
  },
  {
    Name: "MR. Fusion - Home Energy Reactor",
    Logo: "src/public/images/Brand_Logos/MrFusion_brand_logo.jpg",
  },
  {
    Name: "Sterling Cooper Draper Price",
    Logo: "src/public/images/Brand_Logos/SCDP_brand_logo.jpg",
  },
  {
    Name: "Buy N Large",
    Logo: "src/public/images/Brand_Logos/BNL_brand_logo.jpg",
  },
  {
    Name: "Black Lotus Corp",
    Logo: "src/public/images/Brand_Logos/BlackLotus_brand_logo.jpg",
  },
  {
    Name: "Evil Corp",
    Logo: "src/public/images/Brand_Logos/EvilCorp_brand_logo.jpg",
  },
];

export default function Cardlist(): JSX.Element {
  const [count, setCount] = useState(4);

  return (
    <>
      <CardListContainer>
        {BrandsData.slice(0, count).map((brand) => (
          <Card logo={brand.Logo} key={brand.Name} />
        ))}
      </CardListContainer>
      {count <= 12 ? (
        <ShowMoreButton onClick={() => setCount(count + 4)}>
          Load More Brands
        </ShowMoreButton>
      ) : null}
    </>
  );
}

const CardListContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const ShowMoreButton = styled("button")`
  background-color: inherit;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 400;
  color: #354052;
  &:hover {
    color: #e9812c;
  }
`;
