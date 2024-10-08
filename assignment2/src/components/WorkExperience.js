import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <section class="experience">
        <h3>Work Experience</h3>
        <div className="right-col">
          {Object.entries(this.props.experience).map(([key, exp]) => (
            <div className="job" key={key}>
              <h4>
                {exp.jobTitle} at {exp.company} ({exp.start} - {exp.end})
              </h4>
              <p>{exp.info}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
  
export default WorkExperience;