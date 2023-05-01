import { Children } from "react";
import styled from "styled-components";

const Title = styled.header`
  display: flex;
  align-items: center;
  padding-left: 24px;
  background-color: #000000;
  border: 1px solid #2a2a2b;
  height: 56px;
`;
const H1 = styled.h1`
  color: #E1E3E6;
  font-size: 15px;
`;

export const Header = ({tab}) => {
  return (
    <Title>
      <H1>{tab}</H1>
    </Title>
  );
};
