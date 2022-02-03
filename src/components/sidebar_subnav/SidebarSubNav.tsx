import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sidebarNavigationType } from "../../types/sidebarNavigationType";

export default function SidebarSubNav({ item }: any): JSX.Element {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.link} onClick={item.subNav && showSubnav}>
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
        item.subNav?.map((item: sidebarNavigationType) => {
          return (
            <DropdownLink to={item.link} key={item.title}>
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
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 1rem 2rem;
  list-style: none;
  height: 10%;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  color: #7f8fa4;
  &:hover {
    background-color: #eff1fa;
  }
  &:focus {
    background-color: #fef8f3;
    color: #e9812c;
  }
`;

const SidebarLabel = styled("span")`
  margin-left: 20px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem 1rem 5rem;
  list-style: none;
  height: 10%;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  color: #7f8fa4;
  &:hover {
    background-color: #eff1fa;
  }
  &:focus {
    background-color: #fef8f3;
    color: #e9812c;
  }
`;
