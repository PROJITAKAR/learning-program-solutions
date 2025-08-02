import React, { useState } from "react";

// Guest greeting component
function GuestGreeting() {
  return <h2>Welcome Guest! Please log in to book your ticket.</h2>;
}

// User greeting component
function UserGreeting() {
  return <h2>Welcome User! You can now book your flight ticket.</h2>;
}

// Greeting component - shows user or guest greeting based on login status
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Login button component
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

// Logout button component
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Flight Booking Portal</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
