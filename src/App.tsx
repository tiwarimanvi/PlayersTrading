import React from "react";
import Home_nft from "./components/Home_nft";
import CreateNFT from "./components/CreateNFT";
import SellNFT from "./components/SellNFT";
import Loader from "./components/Loader";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  
  return (
    <div className="">
      {/* <Loader/> */}
     <BrowserRouter>
     <Routes>
     <Route path='/' element = {<Loader/>}></Route>
      {/* <Route path='/' element = {<Home_nft/>}></Route> */}
      <Route path='/home' element = {<Home_nft/>}></Route>
      <Route path='/createnft' element = {<CreateNFT/>}></Route>
      <Route path='/sellnft' element = {<SellNFT/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
