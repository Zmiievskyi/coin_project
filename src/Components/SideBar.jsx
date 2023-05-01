import styled from "styled-components";
import { Index } from "./SideBar/index";
const { SideBarHeader, ButtonList } = Index;

const Div = styled.div`
  background-color: #000000;
`;

export const SideBar = ({ onHeaderTitle }) => {
  return (
    <Div>
      <SideBarHeader />
      <ButtonList onHeaderTitle={onHeaderTitle} />
    </Div>
  );
};
