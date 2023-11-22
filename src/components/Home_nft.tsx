// import React from 'react';
// import "../css/Home_nft.css"; // Import the CSS file for styling
// import { alumnidata } from './data';

// function Home_nft() {
//   return (
//     <div className='body'>
//       {alumnidata.map((alumni, index) => (
//         <div className="card" key={index}>
//           <div className="card-image">
//             <img src={alumni.image} alt="profile-picture" />
//           </div>
//           <div className="card-content">
//             <h4 className="card-title">{alumni.name}</h4>
//           </div>
//           {/* <div className='two-emoji'>
//           <div className="flag">
//             <img src={alumni.flag} alt="profile-picture" />
//           </div>
//           <div className="icon">
//             <img src={alumni.icon} alt="profile-picture" />
//           </div>
//           </div> */}
//           <div>
//             <button className="submit-button" onClick={() => alert(`Buy ${alumni.name}`)}>
//               Buy
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home_nft;

import React, { useState } from 'react';
import "../css/Home_nft.css";
import { alumnidata } from './data';
import { getAccount } from '../utils/wallet';

function Home_nft() {
  const [account, setAccount] = useState<string | null>(null);

  const checkWalletConnection = async () => {
    const connectedAccount = await getAccount();
    setAccount(connectedAccount);
  };

  const handleBuyClick = () => {
    if (account) {
      // Wallet is connected, perform buy logic
      alert('Buy clicked!');
    } else {
      // Wallet is not connected, give alert
      alert('Wallet not connected. Please connect your wallet.');
    }
  };

  return (
    <div className='body'>
      {alumnidata.map((alumni, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={alumni.image} alt="profile-picture" />
          </div>
          <div className="card-content">
            <h4 className="card-title">{alumni.name}</h4>
          </div>
          <div className="line"></div>
          <div className="two-emoji">
           <div className="">
             <img src={alumni.flag} alt="profile-picture" className='flag' />
           </div>
           {/* <div>
            <button>{alumni.no}</button>
           </div> */}
           </div>
          <div>
            <button className="submit-button" onClick={handleBuyClick}>
              {alumni.price}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home_nft;

