import React from "react";
import styled from "styled-components";

export default function ContentManagement() {
  return (
    <ContentManagementArea>
      <ContentManagementLabel />
    </ContentManagementArea>
  );
}

const ContentManagementArea = styled("div")`
  background-color: #f5f6fa;
  width: 100%;
  height: 100%;
  border-right: 1px solid #dfe2e5;
`;

const ContentManagementLabel = styled("div")``;
