import styled from "styled-components";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons/lib";
import { BsLightbulbFill, BsGearFill } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import SidebarSubNavTest from "./SidebarSubNavTest";

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

export default function SidebarTest(): JSX.Element {
  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SidebarSubNavTest item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

const SidebarNav = styled("nav")`
  color: red;
  width: 100%;
  height: 100%;
`;

const SidebarWrap = styled("div")`
  width: 100%;
  height: 100%;
`;
