import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
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
                <Card.Text style={{fontWeight: "bold"}}>
                  Instructions: Create an account and then log in with your credentials.
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
              <img className="portfolio-img" alt="Google Books App screenshot" src={booksImg}/>
              <Card.Body>
                <Card.Title>Google Books Search App</Card.Title>
                <Card.Text>
                  This is an app that allows users to search for books using the Google Books API. Users 
                  may also save books to a list and view their saved books later on.
                </Card.Text>
                <a className="mainButton" href="https://damp-anchorage-09325.herokuapp.com/search" target="_blank">
                  <button className="viewAppBtn">View Books App</button>
                </a>
                <a className="mainButton" href="https://github.com/salinb04/Google-Books-App" target="_blank">
                  <button className="viewGithubBtn">View Github Repo</button>
                </a>
              </Card.Body>
            </Card>
            <Card className="portfolioCard">
              <img className="portfolio-img" alt="Pupster App screenshot" src={pupsterImg}/>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;







