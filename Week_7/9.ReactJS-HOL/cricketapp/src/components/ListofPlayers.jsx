import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhani", score: 100 },
    { name: "Virat", score: 4 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  const below70 = players.filter(p => p.score <= 70);

  return (
    <>
      <ul>
        {players.map((p, i) => (
          <li key={i}>Mr. {p.name} {p.score}</li>
        ))}
      </ul>
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>Mr. {p.name} {p.score}</li>
        ))}
      </ul>
    </>
  );
};

export default ListofPlayers;
