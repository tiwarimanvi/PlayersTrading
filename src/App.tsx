import React from "react";
import SiteHeader from "./components/Siteheader";
// import GrievanceForm from "./components/GrievanceForm";
// import Footer from "./components/Footer";
import Home_nft from "./components/Home_nft";


const App: React.FC = () => {
  
  return (
    <div className="">
      <SiteHeader></SiteHeader>
      <Home_nft/>
      {/* <GrievanceForm></GrievanceForm>
      <Footer></Footer> */}

    </div>
  );
};

export default App;
