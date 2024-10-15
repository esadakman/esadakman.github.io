import "./componentsStyles/Skills.css";
import styled from "../assets/styledComponents.svg";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        const contentWidth = scrollerInner.scrollWidth;
        const containerWidth = scroller.clientWidth;
        const timesToDuplicate = Math.ceil(containerWidth / contentWidth) + 1;

        for (let i = 0; i < timesToDuplicate; i++) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <section className="marquee-container">
      <ProjectsTitles className="skills-title">Skills</ProjectsTitles>
      <div className="scroller">
      <div className="skill-icons scroller__inner" data-direction="right" data-speed="slow">
        <div className="icon-container">
          <i className="icon devicon-html5-plain"></i>
          <span className="name">HTML5</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-css3-plain"></i>
          <span className="name">CSS3</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-javascript-plain"></i>
          <span className="name">JavaScript</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-jquery-plain"></i>
          <span className="name">jQuery</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-react-plain"></i>
          <span className="name">ReactJS</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-redux-original"></i>
          <span className="name">Redux</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-nextjs-original"></i>
          <span className="name">NextJS</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-python-plain"></i>
          <span className="name">Python</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-django-plain"></i>
          <span className="name">Django</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-sass-plain"></i>
          <span className="name">Sass</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-bootstrap-plain"></i>
          <span className="name">Bootstrap</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-tailwindcss-plain"></i>
          <span className="name">TailwindCSS</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-materialui-plain"></i>
          <span className="name">Material UI</span>
        </div>
        <div className="icon-container">
          <img className="styled-comp" src={styled} alt="Styled Components" />
          <span className="name">Styled Comp.</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-firebase-plain"></i>
          <span className="name">Firebase</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-sqlite-plain"></i>
          <span className="name">SQlite</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-git-plain"></i>
          <span className="name">Git</span>
        </div>
        <div className="icon-container">
          <i className="icon devicon-github-original"></i>
          <span className="name">Github</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
