import styled from "styled-components";

export default function Logo(): JSX.Element {
  return (
    <RemazingLogoContainer>
      <RemazingLogo src="src\public\images\Remazing Logo.png"></RemazingLogo>
    </RemazingLogoContainer>
  );
}

const RemazingLogoContainer = styled("div")`
  max-width: 100%;
  max-height: 100%;
`;

const RemazingLogo = styled("img")`
  object-fit: contain;
  max-width: 50%;
  max-height: 50%;
`;
