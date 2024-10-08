import React, { Component } from "react";
import "../styles/Divider.css";

class Divider extends Component {
  render() {
    return (
        <hr class={this.props.type}></hr>
    );
  }
}

export default Divider;