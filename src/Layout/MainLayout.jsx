import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SideBar } from "../Components/SideBar";
import { Header } from "../Components/Header";

const GridWrapper = styled.div`
  display: grid;
  grid-template:
    "n h" 56px
    "n  m" 1fr
    / 224px 1fr;
  /* background-color: #000000; */
`;

const GridLeftSide = styled.div`
  grid-area: n;
`;

const GridRightSide = styled.div`
  border: 1px solid #2a2a2b;
  grid-area: m;
`;
const GridHeader = styled.div`
  grid-area: h;
`;

export const MainLayout = () => {
  const [title, setTitle] = useState("Wallet");

  const handleTitle = (title) => {
    setTitle(title);
  };

  return (
    <GridWrapper>
      <GridLeftSide>
        <SideBar onHeaderTitle={handleTitle} />
      </GridLeftSide>
      <GridHeader>
        <Header tab={title} />
      </GridHeader>
      <GridRightSide>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </GridRightSide>
    </GridWrapper>
  );
};
