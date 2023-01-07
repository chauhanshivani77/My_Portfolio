import React from "react";
import AboutDiv from "../css/About.styled";
import { Fade } from "react-awesome-reveal";
import Aboutme from "../assets/icons/aboutme.svg";
import AboutPic from "../assets/image/aboutPic.webp";
const About = () => {
  return (
    <AboutDiv id="about">
      <div className="conatainerAbout">
        {/* <div className="iconContainer"> */}
        <Fade direction="left" className="iconContainer">
          <img className="iconAboutMe" src={AboutPic} alt="" />
        </Fade>
        {/* </div> */}

        <div className="aboutDesc">
          <Fade direction="left">
            <h1 className="subTitle">About me</h1>
            <p className="desc">
            Hello Folks! Meet Me.<br></br>I always try to learn new things about anything and everything. My biggest strength is my self-confidence which keeps me motivated to take any challenge ahead. My main objective is to succeed in an environment of growth and excellence and earn a job which provides me satisfaction and self development and help me achieve personal as well as organization goals. This can also be seen through my academic achievements.
            </p>
          </Fade>
        </div>
      </div>
    </AboutDiv>
  );
};

export default About;

