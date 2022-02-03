import { useState } from "react";
import styled from "styled-components";
import Searchbar from "../search/Searchbar";
import Card from "../card/Card";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const brandsData = [
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
];

export default function BrandsContent(): JSX.Element {
  const [searchBrands, setSearchBrands] = useState("");
  const [showCardList, setShowCardList] = useState(true);

  return (
    <BrandsContentContainer>
      <BrandsContentHeader>
        <CardListViewToggle onClick={() => setShowCardList(!showCardList)}>
          Your Brands
          {showCardList ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </CardListViewToggle>
        <Searchbar setValue={setSearchBrands} />
        <CardListHeaderSortIcons>
          <IoGrid size={30} color="#c0c0c3" />
          <GiHamburgerMenu size={30} color="#e3e3e7" />
        </CardListHeaderSortIcons>
      </BrandsContentHeader>
      {showCardList ? (
        <CardList>
          {brandsData
            .filter((brand) => {
              if (searchBrands == "") {
                return brand;
              } else if (
                brand.Name.toLowerCase().includes(searchBrands.toLowerCase())
              ) {
                return brand;
              }
            })
            .map((brand) => (
              <Card logo={brand.Logo} key={brand.Name} />
            ))}
        </CardList>
      ) : null}
    </BrandsContentContainer>
  );
}

const BrandsContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;
const BrandsContentHeader = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 20px;
`;
const CardListViewToggle = styled("div")`
  display: flex;
  gap: 30px;
  padding-left: 100px;
  padding-top: 10px;
  color: #385483;
  font-size: 1.5rem;
`;
const CardListHeaderSortIcons = styled("div")`
  display: flex;
  gap: 10px;
  padding-right: 100px;
  padding-top: 10px;
`;
const CardList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  gap: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
`;
