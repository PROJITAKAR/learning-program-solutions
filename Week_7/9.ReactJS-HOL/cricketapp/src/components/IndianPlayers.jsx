import React from "react";

const IndianPlayers = () => {
  const team = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvaraj", "Raina"];
  const [first, , third, , fifth] = team;
  const [, second, , fourth, , sixth] = team;

  const T20 = ["First Player", "Second Player", "Third Player"];
  const Ranji = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const merged = [...T20, ...Ranji];

  return (
    <>
      <h3>Odd Players</h3>
      <ul>
        <li>First: {first}1</li>
        <li>Third: {third}3</li>
        <li>Fifth: {fifth}5</li>
      </ul>

      <h3>Even Players</h3>
      <ul>
        <li>Second: {second}2</li>
        <li>Fourth: {fourth}4</li>
        <li>Sixth: {sixth}6</li>
      </ul>

      <h3>List of Indian Players Merged:</h3>
      <ul>
        {merged.map((p, i) => (
          <li key={i}>Mr. {p}</li>
        ))}
      </ul>
    </>
  );
};

export default IndianPlayers;
