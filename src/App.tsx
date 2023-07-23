import React, { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState<string[]>([]);
  const [tickets, setTickets] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    const fetchData = async () => {
      setPlayers([]);
      setTickets(3);
    };

    fetchData();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  const onBuyTicket = async () => {
  };

  // TODO 11.a - Complete onEndGame function
  const onEndGame = async () => {
  };

  return (
    <div className="h-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {/* Ticket remaining display */}
        <div className="py-1">Tickets remaining: {tickets}</div>
        {/* Action Buttons */}
        {tickets > 0 ? (
          <button  className="btn btn-primary btn-lg">
            {/* TODO 7.b - Call onBuyTicket on click */}
            {/* TODO 7.c - Show "loading..." when buying operation is pending */}
            Buy Ticket
          </button>
        ) : (
          <button  className="btn btn-success btn-lg">
            {/* TODO 11.b - Call onEndGame on click */}
            {/* TODO 11.c - Show "loading..." when buying operation is pending */}
            End Game
          </button>
        )}
        {/* List of Players */}
        <div className="mt-2">
          {players.map((player, index) => (
            <div key={index}>
              <b>Ticket {index + 1}:</b> {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
