import React, { Component } from "react";
import "../styles/Skill.css";

class Skill extends Component {
  render() {
    return (
      <div class="skill-item">{this.props.skill}</div>
    );
  }
}
  
export default Skill;