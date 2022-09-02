import React from "react";
import { Flex } from "../componentsStyles/Main.styled";
import {
  ButtonStyleCard,
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  ProjectsTitles,
  TitleCard,
} from "../componentsStyles/ReactProjects.styled";
// import weatherApp from "../../assets/projectPreviews/JavaScript/WeatherApp.jpg";
// import githubApi from "../../assets/projectPreviews/JavaScript/githubApp.jpg";
// import flagApp from "../../assets/projectPreviews/JavaScript/flagApp.jpg";
// import randomUser from "../../assets/projectPreviews/JavaScript/randomUser.jpg";
// import iosCalculator from "../../assets/projectPreviews/JavaScript/iosCalculator.jpg";
// import guessTheNumber from "../../assets/projectPreviews/JavaScript/guessTheNumber.jpg";
// import checkoutForm from "../../assets/projectPreviews/JavaScript/checkoutForm.jpg";
// import digitalClockJS from "../../assets/projectPreviews/JavaScript/digitalClockJS.jpg";
// import stopWatch from "../../assets/projectPreviews/JavaScript/stopWatchJS.jpg";
// import interactiveRating from "../../assets/projectPreviews/JavaScript/interactiveRating.jpg";
// import todoList from "../../assets/projectPreviews/JavaScript/todoList.jpg";
import { useNavigate } from "react-router-dom";
import jsData from "../../helpers/jsProjects";

const JavaScript = () => {
  const navigate = useNavigate();

  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Flex justify="center" wrap="wrap">
      <Flex>
        <ProjectsTitles className="titles">JavaScript Projects</ProjectsTitles>
      </Flex>
      <ProjectsContainer>
        
      {jsData.map((info) => {
          return (
            <CardWrapper
              key={info.id}
              title="Click for details"
              onClick={() => openInNewTab(info.link)}
            >
              <Card>
                <img src={info.imgSrc} alt="poster" />
                <Desc>
                  <h2>Overview</h2>
                  <ul>
                    <li>{info?.overview[0]}</li>
                    <li>{info?.overview[1]}</li>
                    <li>{info?.overview[2]}</li>
                  </ul>
                </Desc>
              </Card>
              <TitleCard>
                <p>{info.projectName}</p>
              </TitleCard>
            </CardWrapper>
          );
        })}
        
         
       

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

export default JavaScript;
