import React from "react";
import {
  ButtonStyleCard,
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  TitleCard,
} from "../componentsStyles/ReactProjects.styled";
// import mando from "../../assets/mando.png";
// import fireContact from "../../assets/projectPreviews/ReactJS/fireContact.png";
// import MovieApp from "../../assets/projectPreviews/ReactJS/MovieApp.jpg";
// import RecipeApp from "../../assets/projectPreviews/ReactJS/RecipeApp.jpg";
// import taskTracker from "../../assets/projectPreviews/ReactJS/taskTracker.jpg";
// import apiTutorial from "../../assets/projectPreviews/ReactJS/apiTutorial.png";
// import randomUserTwo from "../../assets/projectPreviews/ReactJS/randomUserTwo.jpg";
// import weatherApp from "../../assets/projectPreviews/ReactJS/weatherApp.jpg";
// import randomUserOne from "../../assets/projectPreviews/ReactJS/randomUserOne.jpg";
// import axiosRouterExercise from "../../assets/projectPreviews/ReactJS/axiosRouterExercise.jpg";
// import reviewsProject from "../../assets/projectPreviews/ReactJS/reviewsProject.jpg";
// import stopWatch from "../../assets/projectPreviews/ReactJS/stopWatch.jpg";
// import TourPlaces from "../../assets/projectPreviews/ReactJS/TourPlaces.jpg";
// import digitalClock from "../../assets/projectPreviews/ReactJS/digitalClock.jpg";
// import languageCards from "../../assets/projectPreviews/ReactJS/languageCards.jpg";
// import fireBlog from "../../assets/projectPreviews/ReactJS/fireBlog.jpg";

import { Title } from "../componentsStyles/About.styled";
import { Flex } from "../componentsStyles/Main.styled";
import { useNavigate } from "react-router-dom";
const ReactProjects = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Flex justify="center" wrap="wrap">
      <Flex>
        <Title>React Projects</Title>
      </Flex>
      <ProjectsContainer>
      

        <CardWrapper
          title="Click for details"
          onClick={() => openInNewTab(" ")}
        >
          <Card>
            {/* <img src={mando} alt="poster" /> */}
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Overview</p>
          </TitleCard>
        </CardWrapper>

        {/* //! ============Divider=========================== */}
      </ProjectsContainer>
      <ButtonStyleCard
        onClick={() => navigate(-1)}
        style={{ width: "fit-content", height: "3rem" }}
      >
        GO TO HOMEPAGE{" "}
      </ButtonStyleCard>
    </Flex>
  );
};

export default ReactProjects;
