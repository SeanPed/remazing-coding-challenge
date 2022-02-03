import styled from "styled-components";
import { FcDeleteDatabase } from 'react-icons/fc';

export default function DashboardContentView(): JSX.Element {
  return (
    <DashboardManagementArea>
      <DashboardManagementLabel>
      <FcDeleteDatabase size={40}/> &nbsp; Unfortunately there is currently no Dashboard Data to Display
      </DashboardManagementLabel>
    </DashboardManagementArea>
  );
}

const DashboardManagementArea = styled("div")`
  background-color: #f5f6fa;
  width: 100%;
  height: 100%;
  border-right: 1px solid #dfe2e5;
`;

const DashboardManagementLabel = styled("div")`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
color: #7f8fa4;
font-size: 1.2em;
`;