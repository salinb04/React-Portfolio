import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import resume from '../../assets/Ben_Resume.pdf';
import "./contact.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function Contact(){
  const classes = useStyles();
  init("user_UEXhkayNmjmMUBTjT6AYk");

  function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('bens_ID', 'gmail_template', event.target, 'user_UEXhkayNmjmMUBTjT6AYk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
    });
    event.target.reset();
  }

  return(
    <div className="contactWrapper">
    <div className="contact-jumbotron">
      <div className="contactContainer">
        <h1 className="contactHeader">Contact</h1>
        <Dropdown.Divider></Dropdown.Divider>
        <div class="container">
          <div class="row">
            <div class="col-12">
                <a className="contactLink" href="https://www.linkedin.com/in/benjamin-ben-m-salinaro-7020ba7b/" target="_blank"><FaLinkedinIn className="icon" id="linkedinIcon" /> LinkedIn</a>
                <a className="contactLinkRight" href="https://github.com/salinb04" target="_blank"><AiFillGithub className="icon" /> Github</a>
                <a className="contactLinkRow2" href= {resume} target="_blank">View Resume</a>
              <form className={classes.root} onSubmit={sendEmail} id="contactForm" noValidate autoComplete="off">
                <div className="fieldsContainer">
                  <TextField
                    id="name"
                    label="Name"
                    placeholder="Please enter your name here."
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    type="text"
                    name="name"
                  />
                  <TextField
                    id="subject"
                    label="Subject"
                    placeholder="Please enter your subject here."
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    type="text"
                    name="subject"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Please enter your email here."
                    fullWidth
                    margin="normal"
                    type="email"
                    name="email"
                  />
                  <TextField
                    id="message"
                    label="Message"
                    style={{ margin: 8 }}
                    placeholder="Please enter the message you would like to send to my email here."
                    multiline
                    fullWidth
                    rows={8}
                    name="message"
                  />
                </div>
                <button type="submit" value="Send" class="submitBtn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact;