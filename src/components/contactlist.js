import React, { Component } from "react";
import { connect } from "react-redux";

class Contactlist extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map(el => (
          <div className="contact">
            <h3>{el.name}</h3>
            <h3>{el.age}</h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.ContactsReducer
  };
};

export default connect(mapStateToProps)(Contactlist);
