import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
  render() {
    return (
      <section class="skill">
        <h3>Key Skill</h3>
        <div class="right-col skills-list">
          <Skill skill="Python"></Skill>
          <Skill skill="C++"></Skill>
          <Skill skill="JavaScript"></Skill>
          <Skill skill="Ruby"></Skill>
          <Skill skill="Golang"></Skill>
          <Skill skill="Java"></Skill>
          <Skill skill="PHP"></Skill>
          <Skill skill="SQL"></Skill>
          <Skill skill="Swift"></Skill>
        </div>
      </section>
    );
  }
}
  
export default Skills;