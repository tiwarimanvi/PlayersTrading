import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home_nft from './Home_nft';
import "../css/Loader.css";


function Loader()  {
    const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Navigate to the home route after 3 seconds
      navigate('/home');
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    
    <div className="background-container">
        <div>
            <h1 className='heading'>PlayersTrading</h1>
        </div>
    </div>
  );
}

export default Loader
