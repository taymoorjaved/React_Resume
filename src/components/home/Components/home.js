import React from "react";
import {Link} from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import CakeIcon from '@material-ui/icons/Cake';
import RoomIcon from '@material-ui/icons/Room';
import FlagIcon from '@material-ui/icons/Flag';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import image from "./taymoor.png";
import Workstation from "./workstation.jpeg"

import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="home-main">
                <div className="main-text">
                    <h3 className="main-hello">HEllO</h3>
                    <h3>I'm Taymoor Javed</h3>
                    <h3 id="hi"></h3>
                    <div className="icons">
                       <a href="https://de.linkedin.com/in/taymoorjaved"  target="_blank" > <LinkedInIcon className="social-icon"/></a>
                       <a href="https://github.com/taymoorjaved"  target="_blank" > <GitHubIcon className="social-icon"/></a>
                       <a href="https://twitter.com/Taymoor42191225"  target="_blank" > <TwitterIcon className="social-icon"/></a>
                       <a href="https://www.facebook.com/taymoor.javed.75033/"  target="_blank" > <FacebookIcon className="social-icon"/></a>
                    </div>

                </div>
                <div>
                    <div> <img className="main-image" src={image}  alt="taymoor's image"/></div>
                </div>
            </div>
            <div className="home-about">
                <h3 className="section-heading">About Me</h3>
                <div className="separator"></div>
                <div className="main-box-container">
                    <div className="inner-box box-one"><CakeIcon className="about-icons"/>
                        <h5>D.O.B</h5>
                        <h6>03.04.1996</h6>
                    </div>
                    <div className="inner-box box-two"><RoomIcon className="about-icons"/>
                        <h5>Address</h5>
                        <h6>Berlin, Germany</h6>
                    </div>
                    <div className="inner-box box-three"><FlagIcon className="about-icons"/>
                        <h5>From</h5>
                        <h6>Pakistan</h6>
                    </div>
                </div>
            </div>
            <div id="contact" className="home-about">
                <h3 className="section-heading">Contact Me</h3>
                <div className="separator"></div>
                <div className="main-box-container">
                    <a href="tel:+49-1575-4496583" className="atag" >
                    <div className="inner-box box-one phone-box"><PhoneIcon className="about-icons"/>
                        <h5>Phone</h5>
                        <h6>+49-1575-4496583</h6>
                    </div>
                    </a>
                    <a href="mailto:taymoorjaved320@gmail.com" className="atag">
                    <div className="inner-box box-two email-box"><AlternateEmailIcon className="about-icons"/>
                        <h5>Email</h5>
                        <h6>taymooraved320@gmail.com</h6>
                    </div>
                    </a>
                </div>
            </div>
            <div className="work-station">
            <h3 className="section-heading">My Workstation</h3>
                <div className="separator"></div>
                <div><img className="workstation-image" src={Workstation}  alt="my workstation"/></div>
            </div>
            
        </div>
    )
}

export default Home;
