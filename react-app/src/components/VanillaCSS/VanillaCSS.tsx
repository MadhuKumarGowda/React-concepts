// Import React (optional in modern React, but good for clarity)
// import React from 'react';

import "./VanillaCSS.css";

// Functional component definition for VanillaCSS
const VanillaCSS = () => {
  const players: string[] = [
    "Virat Kohli",
    "Rohit Sharma",
    "Jasprit Bumrah",
    "KL Rahul",
    "Ravindra Jadeja",
  ];

  const item_list = players.map((player, index) => {
    return (
      <li className="list-group-item" key={index}>
        {player}
      </li>
    );
  });
  // Render a div with the text "VanillaCSS"
  return (
    <>
      <h2>Top indian Players </h2>
      <ul className="list-group">{item_list}</ul>
    </>
  );
};

// Export the VanillaCSS component as default
export default VanillaCSS;
