import styled from "styled-components";
import { CoinCart } from "../Components/CoinCart/CoinCart";
import { ContentFilter } from "../Components/ContentFilter";
import { WideCoinCart } from "../Components/CoinCart/WideCoinCart";

const Div = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #000000;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: 204px;
  grid-auto-rows: 182px;
  padding: 16px;
  @media (max-width: 895px) {
    grid-template-columns: 343px;
    grid-template-rows: 380px;
  }
`;
const Li = styled.li`
  border: 1px solid #2a2a2b;
  border-radius: 12px;
  background-color: #1d1d1e;
  @media (max-width: 895px) {
    width: 343px;
    height: 182px;
  }
`;
const WideLi1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  border: 1px solid #2a2a2b;
  border-radius: 12px;
  background-color: #1d1d1e;
  width: 616px;
  height: 204px;
  @media (max-width: 895px) {
    grid-column-start: inherit;
    grid-column-end: inherit;
    width: 343px;
    height: 380px;
  }
`;
const WideLi2 = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  border: 1px solid #2a2a2b;
  border-radius: 12px;
  background-color: #1d1d1e;
  @media (max-width: 1475px) {
    grid-column-start: inherit;
    grid-column-end: inherit;
  } ;
`;

export const Wallet = () => {
  return (
    <>
      <ContentFilter />
      <Div>
        <Ul>
          <WideLi1>wide1</WideLi1>
          <WideLi2>wide2</WideLi2>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Li key={item}><CoinCart /> </Li>
          ))}
        </Ul>
      </Div>
    </>
  );
};
