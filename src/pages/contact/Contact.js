import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import resume from '../../assets/BenResume.pdf';
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
              <form className={classes.root} id="contactForm" noValidate autoComplete="off">
                <div className="fieldsContainer">
                  <TextField
                    id="name"
                    label="Name"
                    placeholder="Please enter your name here."
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Please enter your email here."
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="message"
                    label="Message"
                    style={{ margin: 8 }}
                    placeholder="Please enter the message you would like to send to my email here."
                    multiline
                    fullWidth
                    rows={8}
                  />
                </div>
                <button type="submit" class="submitBtn">Submit</button>
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