import { BsLightbulbFill, BsGearFill } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

import SidebarSubNav from "./SidebarSubNav";
import styled from "styled-components";

const SidebarData = [
  {
    title: "Dashboard",
    icon: <MdHomeFilled />,
    link: "/",
  },
  {
    title: "Content Management",
    icon: <BiNews />,
    link: "/content-management",
  },
  {
    title: "Monitoring",
    icon: <AiFillPieChart />,
    iconClosed: <RiArrowDropDownLine />,
    iconOpen: <RiArrowDropUpLine />,
    link: "/monitoring",
    subNav: [
      {
        title: "Content",
        icon: <BsLightbulbFill />,
        link: "/monitoring/Content",
      },
    ],
  },
  {
    title: "Account",
    icon: <BsGearFill />,
    iconClosed: <RiArrowDropDownLine />,
    iconOpen: <RiArrowDropUpLine />,
    link: "/account",
    subNav: [
      {
        title: "Users",
        icon: <FaUserFriends />,
        link: "/account/users",
      },
    ],
  },
];

export default function Sidebar(): JSX.Element {
  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SidebarSubNav item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
}

const SidebarNav = styled("nav")`
  min-height: 85vh;
  min-width: 5vw;
  border: 1px solid #dfe2e5;
  border-top: none;
`;

const SidebarWrap = styled("div")`
  padding-top: 2rem;
  border-bottom: 0;
  border-top: 0;
  background-color: #ffffff;
`;
