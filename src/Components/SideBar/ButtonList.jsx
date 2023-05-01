import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as WalletSvg } from "../../images/walletIcon.svg";

const Div = styled.div``;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  padding: 0;
  margin-top: 8px;
`;

const Li = styled.li`
  list-style: none;
`;

const WalletIcon = styled(WalletSvg)`
  fill: inherit;
  transition: fill 0.2s ease-in-out;
`;

const A = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px;
  border: 2px solid #000000;
  color: #c0c1c6;
  fill: #838487;
  width: 208px;
  height: 40px;
  transition: color 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #fff;
    fill: white;
    border: 2px solid #2260ff;
    border-radius: 12px;
  }
`;



export const ButtonList = ({ onHeaderTitle }) => {

  return (
    <>
      <Ul>
        <Li>
          <A to="/summary" onClick={() => onHeaderTitle('Summary')}>
            <WalletIcon />
            <span style={{ marginLeft: "16px" }}>Summary</span>
          </A>
        </Li>
        <Li>
          <A to="/wallet" onClick={() => onHeaderTitle('Wallet')}>
            <WalletIcon />
            <span style={{ marginLeft: "16px" }}>Wallet</span>
          </A>
        </Li>
        <Li>
          <A to="/nfts">
            <WalletIcon />
            <span style={{ marginLeft: "16px" }}>NFTs</span>
          </A>
        </Li>
        <Li>
          <A to="/naas">
            <WalletIcon />
            <span style={{ marginLeft: "16px" }}>NaaS</span>
          </A>
        </Li>
        <Li>
          <A to="/nodes">
            <WalletIcon />
            <span style={{ marginLeft: "16px" }}>Nodes</span>
          </A>
        </Li>
        <Li>
          <A to="lending">
            <WalletIcon />
            <span style={{ marginLeft: "16px" }}>Lending</span>
          </A>
        </Li>
      </Ul>
    </>
  );
};
