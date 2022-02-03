import styled from "styled-components";

import { AiFillAmazonCircle } from "react-icons/ai";
import { FaBell } from "react-icons/fa";

export default function NotificationsIcon(): JSX.Element {
  return (
    <BellIcon
      onClick={() => alert("Unfortunately there are no new Notifications!")}
    >
      <FaBell />
      <NewNotificationsIcon>
        <AiFillAmazonCircle size={20} />
      </NewNotificationsIcon>
    </BellIcon>
  );
}

const BellIcon = styled("a")`
  position: relative;
  font-size: 1.5em;
  color: #444444;
  &:hover {
    color: #e9812c;
  }
`;
const NewNotificationsIcon = styled("div")`
  position: absolute;
  right: -5px;
  top: -15px;
  font-size: 1em;
  color: #e9812c;
`;
