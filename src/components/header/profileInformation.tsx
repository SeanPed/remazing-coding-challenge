import React from "react";
import styled from "styled-components";

export default function ProfileInformation() {
  return (
    <ProfileArea>
      <ProfileName>JB</ProfileName>
      <ProfilePicture
        src="src\public\images\jeffrey-profile.png"
        onClick={() =>
          alert(
            "Hello Jeffrey - unfortunately your Profile Page is not implemented yet!"
          )
        }
      />
    </ProfileArea>
  );
}

const ProfileArea = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;

const ProfileName = styled("p")`
  color: #354052;
  font-weight: bold;
  font: solid;
`;
const ProfilePicture = styled("img")`
  height: 50px;
  &:hover {
    transform: scale(1.1);
  }
`;
