import React from "react";
import contacts from "../contacts";
import createCard from '../createCard';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
