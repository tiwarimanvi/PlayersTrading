import React, { useState, useEffect } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import "../css/Siteheader.css";
import {Link} from 'react-router-dom'

function SiteHeader() {
  const [account, setAccount] = useState<string>("");
  const [active, setActive] = useState(false);

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  
  return (
    <header>
      <div className="container">
        <div className="text">
          <div className="logo">
            <img src="logo.jpeg" alt="Logo" />
          </div>
          <div className="Name">
            <h4>PlayersTrading</h4>
          </div>
        </div>
        <div className="links">
          <Link to='/home' className="home" >home</Link>
          <Link to='/sellnft' className="sell">sell</Link>
          <Link to='/createnft' className="create">create</Link>
          <button
            onClick={onConnectWallet}
            className={
              "button px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer"
            }
          >
            💳{" "}
            {account
              ? account.slice(0, 4) +
                "..." +
                account.slice(account.length - 4, account.length)
              : "Connect"}
          </button>
        </div>
        
      </div>
      <hr />
    </header>
  );
}

export default SiteHeader;
