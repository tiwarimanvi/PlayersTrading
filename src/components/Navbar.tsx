import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    (async () => {
      setAccount("");
    })();
  }, []);

  const onConnectWallet = async () => {
  };

  return (
    <div className="navbar navbar-dark bg-dark fixed-top">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Tezos Lottery
        </a>
        <div className="d-flex">
          <button  className="btn btn-outline-info">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
