import React from "react";
import logo from "./logo.svg";
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
