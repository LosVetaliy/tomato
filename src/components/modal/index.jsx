import React from "react";
import Form from "../form";
import './modal.css';

export default class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return <div className="modal">
      <Form handleSubmit={this.handleSubmitForm}/>
    </div>;
  }
}

