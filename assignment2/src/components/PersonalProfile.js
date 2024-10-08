import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <section class="profile">
        <h3>Personal Profile</h3>
        <div class="right-col">
          <p>{this.props.profileIntro.intro}</p>
        </div>
      </section>
    );
  }
}
  
export default PersonalProfile;