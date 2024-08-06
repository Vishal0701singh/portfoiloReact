import React from "react";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "pig game",
    description:
      "This is a simple ludo game.In this game their are two players only. This is created by simple HTML, CSS, Vanilla javaScript and some images and logoes." ,
    url: "https://vishal0701singh.github.io/pigGame/",
  },
  {
    title: "Banking website",
    description:
      "It is a simple banking frontEnd website using HTML, CSS, vanilla javaScript and some images and logo. There are four users such as vishalsingh : 1111, jd:2222,stw:3333, ss:4444   thsese are userName: pin resoectively",
    url: "https://vishal0701singh.github.io/bankingwebsite/",
  },
  {
    title: "My Resume Site",
    description:
      "Created by using simple HTML and CSS  and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://vishal0701singh.github.io/myresume/",
  },
  {
    title: "Cyber security course certificate",
    description:
      "This is cyber security course completion certificate. This course is organised by IIT Jodhpur. Helding duration October 2023 to January 2024.",
    url: "https://www.linkedin.com/posts/vishal-singh-074884280_cybersecurity-iitjodhpur-continuouslearning-activity-7225550768873914368-dQoQ?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "web developer workshop certificate(Internshala)",
    description:
      "This is a web developer workshop certificate. It is hosted by the Aadish bansal Microsoft Learn Student Ambassador.In this workshop we have learned about HTML, css, javaScript, reat.js, github etc.",
    url: "https://www.linkedin.com/posts/vishal-singh-074884280_web-developer-workshop-certificate-activity-7206970488357593088--NIr?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "React project",
    description:
      "My react.js project is running now ",
    url: "#portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="laptop.jpg"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
