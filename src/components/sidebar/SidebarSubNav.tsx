import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SidebarSubNav({ item }: any): JSX.Element {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.link}
        onClick={item.subNav && showSubnav}
        id={window.location.pathname == item.link ? "active" : ""}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav?.map((item: any) => {
          return (
            <DropdownLink
              to={item.link}
              key={item.title}
              id={window.location.pathname == item.link ? "active" : ""}
            >
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}

const SidebarLink = styled(Link)`
  display: flex;
  color: #7f8fa4;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 1rem 2rem;
  list-style: none;
  height: 10%;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  &:hover {
    background-color: #eff1fa;
  }
  &#active {
    background-color: #fef8f3;
    color: #e9812c;
  }
`;

const SidebarLabel = styled("span")`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: #7f8fa4;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem 1rem 5rem;
  list-style: none;
  height: 10%;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  &:hover {
    background-color: #eff1fa;
  }
  &#active {
    background-color: #fef8f3;
    color: #e9812c;
  }
`;
