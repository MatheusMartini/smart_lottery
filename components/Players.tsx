import React, { useState, useEffect } from "react";
import { useLottery } from "../hooks/useLottery";

const Players = () => {
  const contract = useLottery();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (contract) {
      contract.methods.getPlayers().call((err: any, res: any) => {
        if (err) {
          console.error(err);
        } else {
          setPlayers(res);
        }
      });
    }
  }, [contract]);

  return (
    <div >
      <p>participating addresses:</p>
      <ul className="px-8 h-8 bg-red-500">
        {players?.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default Players;
