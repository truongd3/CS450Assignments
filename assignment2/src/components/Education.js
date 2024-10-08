import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section class="education">
        <h3>Education</h3>
        <div class="right-col">
            {Object.entries(this.props.degrees).map(([key, degree]) => (
                <div className="subedu" key={key}>
                <h4>{degree.school}</h4>
                    <p>{degree.level} in {degree.major}</p>
                    <p>{degree.start} - {degree.end}</p>
                    <p>GPA: {degree.gpa}</p>
                </div>
            ))}
        </div>
      </section>
    );
  }
}
  
export default Education;