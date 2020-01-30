import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/contactsActions";
class AddContact extends Component {
  addNewContact = () => {
    let name = prompt("donnez votre nom");
    let age = prompt("donnez votre age");
    let newContact = { name: name, age: age };
    this.props.addNewContact(newContact);
  };
  render() {
    return (
      <div>
        <button onClick={this.addNewContact}>add</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewContact: aaa => dispatch(addContact(aaa))
  };
};

export default connect(null, mapDispatchToProps)(AddContact);
