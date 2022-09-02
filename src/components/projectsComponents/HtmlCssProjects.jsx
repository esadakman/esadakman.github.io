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
import { useNavigate } from "react-router-dom";
import htmlData from "../../helpers/htmlProjects";
const HtmlCssProjects = () => {
  const navigate = useNavigate();

  const openInNewTab = (url) => {
    // 👇️ Proje linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Flex justify="center" wrap="wrap">
      <Flex>
        <ProjectsTitles className="titles">Html/CSS Projects</ProjectsTitles>
      </Flex>
      <ProjectsContainer>
      {htmlData.map((info) => {
          return (
            <CardWrapper
              key={info?.id}
              title="Click for details"
              onClick={() => openInNewTab(info?.link)}
            >
              <Card>
                <img src={info?.imgSrc} alt="poster" />
                <Desc>
                  <h2>Overview</h2>
                  <ul>
                    <li>{info?.overview[0]}</li>
                    <li>{info?.overview[1]}</li>
                    <li>{info?.overview[2]}</li>
                    <li>{info?.overview[3]}</li>
                  </ul>
                </Desc>
              </Card>
              <TitleCard>
                <p>{info?.projectName}</p>
              </TitleCard>
            </CardWrapper>
          );
        })} 
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

export default HtmlCssProjects;
