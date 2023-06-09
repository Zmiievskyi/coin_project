import styled from "styled-components";
import {
  color,
  border,
  layout,
  space,
  flexbox,
  background,
} from "styled-system";

export const Title = styled.h2`
  /* text-align: center; */
`;

export const SectionBox = styled.section`
  flex-wrap: wrap;
  flex-direction: column;
  ${color};
  ${layout};
  ${space};
  ${flexbox};
`;

export const Box = styled.div(
  {
    display: "flex",
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox
);

export const Button = styled.button`
  width: 100px;
  height: 30px;
  display: block;
  margin-top: ${(props) => props.theme.space[3]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
