import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="HD">
        <div class="fullname">
            <h1>{this.props.personInfo.name}</h1>
            <h2>{this.props.personInfo.title}</h2>
        </div>
        <div class="contact">
            <p>Email: <a href={this.props.contactInfo.email}>{this.props.contactInfo.email}</a></p>
            <p>Web: <a href={this.props.contactInfo.web}>{this.props.contactInfo.web}</a></p>
            <p>Mobile: {this.props.contactInfo.mobile}</p>
        </div>
      </div>
    );
  }
}

export default Header;