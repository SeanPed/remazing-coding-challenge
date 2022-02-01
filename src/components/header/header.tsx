import styled from "styled-components";
import NotificationsIcon from "./notificationsIcon";
import ProfileInformation from "./profileInformation";

export default function Header(): JSX.Element {
  return (
    <HeaderArea>
      <HeaderContentLeft>
        <HeaderLogo src="src\public\images\Remazing Logo.png" />
      </HeaderContentLeft>
      <HeaderContentRight>
        <NotificationsIcon />
        <ProfileInformation />
      </HeaderContentRight>
    </HeaderArea>
  );
}

const HeaderArea = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  border: 1px solid #dfe2e5;
  background-color: #ffffff;
  padding-top: 5px;
`;

const HeaderContentLeft = styled("div")`
  padding-left: 50px;
  color: #486277;
  width: 10%;
  padding-bottom: 5px;
`;

const HeaderContentRight = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-right: 40px;
  color: #486277;
  font-size: 1.2em;
  font-weight: 100;
`;

const HeaderLogo = styled("img")`
  width: 90%;
`;
