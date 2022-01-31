import { useState } from "react";
import { IconType } from "react-icons/lib";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

type SubNavProps = {
  title: string;
  link: string;
  icon: any;
};

export default function SidebarSubNav(item: SubNavProps): JSX.Element {
  const [subnav, setSubnav] = useState(true);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <SideBarListSubNav>
      <SideBarListSubNavItem
        id={window.location.pathname == item.link ? "active" : ""} //instead of window use useLocation() from React Router
        key={item.title}
        onClick={() => {
          window.location.pathname = item.link;
        }}
      >
        {item.icon}
        {item.title}
      </SideBarListSubNavItem>
      )
    </SideBarListSubNav>
  );
}

const SideBarListSubNav = styled("li")`
  list-style: none;
`;
const SideBarListSubNavItem = styled("li")`
  height: 10%;
  color: #7f8fa4;
  font-size: 1.2em;
  list-style-type: none;
  padding-left: 40px;
  font-weight: 700;
  display: flex;
  justify-content: left;
  align-items: center;
  &:hover {
    background-color: #eff1fa;
  }
  &#active {
    background-color: #fef8f3;
    color: #e9812c;
  }
`;
