import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import weatherImg from '../../assets/weatherImage.png';
import newsImg from '../../assets/my-news-app-img.png';
import booksImg from '../../assets/books-image.png';
import pupsterImg from '../../assets/pupster-img.png';
import "./portfolioStyle.css";

function Portfolio() {
  return (
    <div>
      <div className="portfolio-jumbotron">
        <div className="portfolioContainer">
          <h1 className="portfolioHeader">Portfolio</h1>
          <Dropdown.Divider></Dropdown.Divider>
          <div className="cardsContainer">
            <Card className="portfolioCard">
              <img className="portfolio-img" alt="myNews Screenshot" src={newsImg}/>
              <Card.Body>
                <Card.Title>MyNews App</Card.Title>
                <Card.Text>
                  A news application that allows users to create an account and then select 
                  news categories based on what types of news they would like to see.
                </Card.Text>
                <a className="mainButton" href="https://blooming-everglades-84355.herokuapp.com/login" target="_blank">
                  <button className="viewAppBtn">View myNews App</button>
                </a>
                <a className="mainButton" href="https://github.com/salinb04/myNews" target="_blank">
                  <button className="viewGithubBtn" href="https://salinb04.github.io/Weather-App/" target="_blank">View Github Repo</button>
                </a>
              </Card.Body>
            </Card>
            <Card className="portfolioCard">
              <img className="headshot" alt="my headshot" src={booksImg}/>
              <Card.Body>
                <Card.Title>Google Books Search App</Card.Title>
                <Card.Text>This is an app that allows users to search for books using the Google Books API. Users 
                may also save books to a list and view their saved books later on.</Card.Text>
                <a className="mainButton" href="https://damp-anchorage-09325.herokuapp.com/search" target="_blank">
                  <button className="viewAppBtn">View Books App</button>
                </a>
                <a className="mainButton" href="https://github.com/salinb04/Google-Books-App" target="_blank">
                  <button className="viewGithubBtn">View Github Repo</button>
                </a>
              </Card.Body>
            </Card>
            <Card className="portfolioCard">
              <img className="headshot" alt="my headshot" src={pupsterImg}/>
              <Card.Body>
                <Card.Title>Pupster</Card.Title>
                <Card.Text>
                A dating app for pups that uses the Dog API! On the Search page users may like or dislike dogs, and there's a 20% chance a dog will like you back. 
                The Discover page allows users to search dog images by breed.
                </Card.Text>
                <a className="mainButton" href="https://salinb04.github.io/react-pupster/" target="_blank">
                  <button className="viewAppBtn">View Pupster App</button>
                </a>
                <a className="mainButton" href="https://github.com/salinb04/react-pupster" target="_blank">
                  <button className="viewGithubBtn">View Github Repo</button>
                </a>
              </Card.Body>
            </Card>
            {/* <Card className="portfolioCard">
              <img className="headshot" alt="my headshot" src={weatherImg}/>
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                A weather application that allows users to search for the current weather and 5-day forecast for cities.
                </Card.Text>
                <a className="mainButton" href="https://salinb04.github.io/Weather-App/" target="_blank">
                  <button className="viewAppBtn">View Weather App</button>
                </a>
                <a className="mainButton" href="https://github.com/salinb04/Weather-App" target="_blank">
                  <button className="viewGithubBtn" href="https://salinb04.github.io/Weather-App/" target="_blank">View Github Repo</button>
                </a>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body" id="resume-github">
          <h5 class="card-title">Resume and Github Link</h5>
          <p class="card-text">To view more information about my experience, projects, and skills, my resume, LinkedIn
          profile, email, phone number, and github profile link are available here.</p>
          <a href="https://github.com/salinb04" target="_blank" class="btn btn-primary">View Github Profile</a>
          <a href="./Assets/BenResume.pdf" target="_blank" class="btn btn-primary">View Resume</a>
          <a href="https://www.linkedin.com/in/benjamin-ben-m-salinaro-7020ba7b/" target="_blank"
          class="btn btn-primary">View LinkedIn</a>
          <a href="mailto:bensalinaro@gmail.com" class="btn btn-primary">Email Me</a>
          <a href="tel:2143354878" class="btn btn-primary">Call Me At 214-335-4878</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;







