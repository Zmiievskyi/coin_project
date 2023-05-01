import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import GlobalStyle from "./GlobalStyle";
import { Wallet } from "./Pages/Wallet";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Wallet />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="summary" element={<div>"Summary"</div>} />
          <Route path="NFTs" element={<div>"Summary"</div>} />
          <Route path="NaaS" element={<div>"Summary"</div>} />
          <Route path="Nodes" element={<div>"Summary"</div>} />
          <Route path="Lending" element={<div>"Summary"</div>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
