import React from "react";
import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

const App = () => {
  const flag = false;

  return (
    <div>
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListofPlayers />
        </>
      ) : (
        <>
          <h1>Indian Team</h1>
          <IndianPlayers />
        </>
      )}
    </div>
  );
};

export default App;
