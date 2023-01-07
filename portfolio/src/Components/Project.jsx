import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";
import NaukriImg from "../assets/Project-img/naukri.png";
import EnvoyImg from "../assets/Project-img/Envoy.png";
import sugarImg from "../assets/Project-img/home.png";

let projectData = [
  {
    id: 1,
    heroImage: `${NaukriImg}`,
    title: "Naukri.com Clone",
    desc: "Naukri.com is a famous job search website. In this we created a good looking user interface with basic core functionalities like job search, filter, apply, post etc are working properly.",
    team: "A collaborative project, built in 7 days by team of 5 members.",
    git: "https://github.com/shubhamkmit9021/naukri-website-clone",
    deployed: "https://naukri-clone-page.netlify.app/",
    techStack:
      " HTML | CSS | Javascript | git",
    blog: "#",
    rank: null
  },
  {
    id: 2,
    heroImage: `${EnvoyImg}`,
    title: "Envoy.com Clone",
    desc: " Envoy is a company offering an enterprise workplace visitor management software platform that is headquartered in San Francisco, California and was founded in 2013 by Larry Gadea. The Envoy platform allows enterprises the ability to securely sign-in guests, manage deliveries, and organize meeting room bookings.  ",
    team: "A collaborative project, built in 7 days by team of 4 members.",
    git: "https://github.com/bkabhi/envoy-clone-project",
    deployed: "https://envoy-clone-project.netlify.app/",
    techStack:
      "HTML | CSS | Javascript | JSON Server | git",
    blog: "#",
    rank: null
  },
  {
    id: 3,
    heroImage: `${sugarImg}`,
    title: "Sugar Cosmetics Clone",
    desc: "Clone of Sugar Cosmetics website. Login, signup and user profile. All Ticket searching , sorting , filtering and cartpage functionalities,User can buy selected products , User can LogIn with his username , User can avail Promocode and get discounts on purchase ",
    team: "A collaborative project, built in 7 days by team of 4 members.",
    git: "https://github.com/Ishuklaji/Suger-Cosmetics/tree/master/src",
    deployed: "https://sugarcosmetics-beauty.netlify.app/",
    techStack:
      " ReactJS | Chakra UI | Javascript | JSON Server | Herokuu App | Bootstrap | git",
    blog: "#",
    rank: null
  },


];

const Projects = () => {
  const [data, setData] = useState(projectData);

  return (
    <>
      <ProjectsCon id="projects">
        <h1 style={{ color: "white" }} className="subTitle">Projects</h1>
        <div className="projectCon">
          {data.map((el) => {
            return <Singleproject key={el.id} {...el} />;
          })}
        </div>
      </ProjectsCon>
    </>
  );
};

export default Projects;
