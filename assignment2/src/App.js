import React, { Component } from 'react';
import "./App.css";
import Header from './components/Header';
import PersonalProfile from "./components/PersonalProfile";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Romeo Juliet",
        title: "Software Engineer",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      experience: {
        exp1: {
          jobTitle: "Job Title 1",
          company: "Company 1",
          start: " August 2022",
          end: "December 2023",
          info: "Lorem ipsum dolor cho amet, consectetur adipiscing elit, con do eiusmod tempor incididunt ut labore et dolore tesla aliqua. di enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ma ea commodo consequat. Con cam on."
        },
        exp2: {
          jobTitle: "Job Title 2",
          company: "Company 2",
          start: " August 2020",
          end: "December 2021",
          info: "Lorem ipsum dolor cho amet, consectetur adipiscing elit, con do eiusmod tempor incididunt ut labore et dolore tesla aliqua. di enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ma ea commodo consequat. Con cam on."
        }
      },
      education: {
        degree1: {
          school: "New Jersey Institute of Technology",
          level: "BS",
          major: "Computer Science",
          start: 2018,
          end: 2022,
          gpa: "3.9"
        },
        degree2: {
          school: "New Jersey Institute of Technology",
          level: "MS",
          major: "Data Science",
          start: 2022,
          end: 2023,
          gpa: "4.0"
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <hr class="divider"></hr>
        <PersonalProfile profileIntro={this.state.personInfo}></PersonalProfile>
        <hr class="subdivider"></hr>
        <WorkExperience experience={this.state.experience}></WorkExperience>
        <hr class="subdivider"></hr>
        <Skills></Skills>
        <hr class="subdivider"></hr>
        <Education degrees={this.state.education}></Education>
      </div>
    );
  }
}
export default App;