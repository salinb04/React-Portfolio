import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import headshot from "../../assets/headshot.png";
import "./about.css";

function About() {
  return (
    <div className="about-jumbotron">
      <div className="aboutMeContainer">
        <h1 className="aboutMeHeader">About</h1>
        <Dropdown.Divider></Dropdown.Divider>
        <img className="headshot" alt="my headshot" src={headshot}/>
        <Link className="mainButton" to="/portfolio">
          <button className="viewPortfolioBtn">View Portfolio</button>
        </Link>
        <div className="textContainer">
          <p className="aboutTextMain">
            My name is Ben Salinaro and I am a Full-Stack Web Developer with 3 years of UX Design experience.
          </p>
          <p className="aboutText"> 
            I am upbeat and I love solving problems. I recently completed SMU's Full-Stack Web Developer 
            bootcamp with a focus on the MERN stack.
          </p>
          <p className="aboutText">
            After graduating from the University of Texas I worked at Imaginuity, a digital marketing 
            agency, for 3 years as a UX Designer. I created many polished and interactive 
            prototypes of websites for clients.
          </p>
          <p className="aboutText">
            My goal is to build React websites using the full-stack knowledge I have gained, while
            also utilizing my UX knowledge and experience, to manifest useful and amazing products
            that help people's lives.
          </p>
          <p className="aboutText">
            Please navigate to the 
            <Link to="/portfolio">
              <a className="textLink"> Portfolio </a>
            </Link>
            page to see examples of projects I've created, or send me 
            an email from the 
            <Link to="/React-Portfolio/contact">
              <a className="textLink"> Contact </a>
            </Link> 
            page if you would like further information. Thank you for your time!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
