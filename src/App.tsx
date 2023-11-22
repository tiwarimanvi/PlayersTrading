import React from "react";
import SiteHeader from "./components/Siteheader";
import Home_nft from "./components/Home_nft";
// import CreateNFT from "./components/CreateNFT";
import FooterNFT from "./components/FooterNFT";


const App: React.FC = () => {
  
  return (
    <div className="">
      <SiteHeader></SiteHeader>
      <Home_nft/>
      <FooterNFT></FooterNFT>

    </div>
  );
};

export default App;
