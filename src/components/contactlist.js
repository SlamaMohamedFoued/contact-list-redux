import React, { Component } from "react";
import { connect } from "react-redux";

class Contactlist extends Component {
  render() {
    return (
      <div>
        {this.props.contactList.map(el => (
          <div>
            <h1>{el.name}</h1>
            <h1>{el.age}</h1>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactList: state.reducerContact
  };
};

export default connect(mapStateToProps)(Contactlist);
