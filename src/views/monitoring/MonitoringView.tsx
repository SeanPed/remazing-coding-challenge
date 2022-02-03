import styled from "styled-components";
import { FcDeleteDatabase } from 'react-icons/fc';

export default function MonitoringView(): JSX.Element {
  return (
    <MonitoringManagementArea>
      <MonitoringManagementLabel>
      <FcDeleteDatabase size={40}/> &nbsp; Unfortunately there is currently no Monitoring Data to Display
      </MonitoringManagementLabel>
    </MonitoringManagementArea>
  );
}

const MonitoringManagementArea = styled("div")`
  background-color: #f5f6fa;
  width: 100%;
  height: 100%;
  border-right: 1px solid #dfe2e5;
`;
const MonitoringManagementLabel = styled("div")`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
color: #7f8fa4;
font-size: 1.2em;
`;