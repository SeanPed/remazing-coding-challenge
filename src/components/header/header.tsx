import styled from "styled-components";
import NotificationsIcon from "../notifications_icon/NotificationsIcon";
import ProfileInformation from "../profile_information/ProfileInformation";

export default function Header(): JSX.Element {
  return (
    <HeaderArea>
      <NotificationsIcon />
      <ProfileInformation />
    </HeaderArea>
  );
}

const HeaderArea = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  height: 8vh;
  border: 1px solid #dfe2e5;
  background-color: #ffffff;
  padding-top: 5px;
  padding-right: 30px;
  margin-left: -1px;
`;
