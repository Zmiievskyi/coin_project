import styled from "styled-components";
import { HandySvg } from "handy-svg";
import icons from "../../images";
import { Box } from "../Components.styled";
import { ReactComponent as UnionSvg } from "../../images/Union.svg";

const { rectangleSrc, defiSrc } = icons;


const P = styled.p`
  padding-top: 5px;
  font-size: 10px;
  color: #838487;
`;

export const SideBarHeader = () => {


  return (
    <>
      <Box pt={16} pb={14} pl={16} pr={22.5} alignItems="center" height={56}>
        <HandySvg src={rectangleSrc} width="26" height="26" />
        <Box
          flexDirection="column"
          justifyContent="flex-end"
          ml={10}
          mr={20}
          height={30}
        >
          <HandySvg src={defiSrc} width="82" height="11" />
          <P>Your one stop crypto hub</P>
        </Box>
        <UnionSvg fill="#838487" />
      </Box>
    </>
  );
};
