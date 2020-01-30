import React from "react";
import "./App.css";
import ContactList from "./components/contactlist";
import AddContact from "./components/addContact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList />
        <AddContact />
      </header>
    </div>
  );
}

export default App;
