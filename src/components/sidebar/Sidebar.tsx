import { useState } from "react";
import styled from "styled-components";

import { MdHomeFilled } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import SidebarSubNav from "./SidebarSubNav";

const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdHomeFilled />,
    link: "/",
  },
  {
    id: 2,
    title: "Content Management",
    icon: <BiNews />,
    link: "/content-management",
  },
  {
    id: 3,
    title: "Monitoring",
    icon: <AiFillPieChart />,
    iconClosed: <RiArrowDropDownLine />,
    iconOpen: <RiArrowDropUpLine />,
    link: "/monitoring",
    subnav: [
      {
        title: "Content",
        icon: <BsLightbulbFill />,
        link: "/monitoring/Content",
      },
    ],
  },
  {
    id: 4,
    title: "Account",
    icon: <BsGearFill />,
    iconClosed: <RiArrowDropDownLine />,
    iconOpen: <RiArrowDropUpLine />,
    link: "/account",
    subnav: [
      {
        title: "Users",
        icon: <FaUserFriends />,
        link: "/account/users",
      },
    ],
  },
];

export default function SideBar(): JSX.Element {
  return (
    <SidebarContainer>
      <SidebarList>
        {SidebarData.map((val, index) => {
          return (
            <>
              <SidebarListRow
                key={index}
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <SidebarListRowIcon>{val.icon}</SidebarListRowIcon>
                <SidebarListRowTitle>{val.title}</SidebarListRowTitle>
              </SidebarListRow>
              {val.subnav?.map((item) => {<SidebarSubNav title={item.title} link={item.link} icon={item.icon} />})}
              
            </>
          );
        })}
      </SidebarList>
    </SidebarContainer>
  );
}

const SidebarContainer = styled("div")`
  height: 100vh;
  width: 100%;
  border: 1px solid #dfe2e5;
  border-bottom: 0;
  border-top: 0;
  background-color: #ffffff;
`;

const SidebarList = styled("ul")`
  height: 100%;
  width: 100%;
  padding: 0;
`;

const SidebarListRow = styled("li")`
  height: 10%;
  color: #7f8fa4;
  font-size: 1.2em;
  list-style-type: none;
  padding-left: 40px;
  font-weight: 700;
  display: flex;
  justify-content: left;
  align-items: center;

  &#active {
    background-color: #fef8f3;
    color: #e9812c;
  }
`;

const SidebarListRowIcon = styled("div")`
  padding-right: 10px;
`;
const SidebarListRowTitle = styled("div")``;
