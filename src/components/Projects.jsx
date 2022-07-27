import React from "react";
import {
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  TitleCard,
} from "./componentsStyles/Projects.styled";
import mando from "../assets/mando.png";
import fireContact from "../assets/projectPreviews/fireContact.png";
import { Title } from "./componentsStyles/About.styled";
import { Flex } from "./componentsStyles/Main.styled";

const Projects = () => {
  return (
    <>
      <Flex>
        <Title>My Projects</Title>
      </Flex>
      <ProjectsContainer>
        <CardWrapper title="Click for details">
          <Card>
            <img src={fireContact} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <p>overview </p>
            </Desc>
          </Card>
          <TitleCard>
            <p> FireContact</p>

            <span></span>
          </TitleCard>
        </CardWrapper>
        <CardWrapper title="Click for details">
          <Card>
            <img src={mando} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <p>overview </p>
            </Desc>
          </Card>
          <TitleCard>
            <p> Proje Name</p>

            <span></span>
          </TitleCard>
        </CardWrapper>
        <CardWrapper title="Click for details">
          <Card>
            <img src={mando} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <p>overview </p>
            </Desc>
          </Card>
          <TitleCard>
            <p> Proje Name</p>

            <span></span>
          </TitleCard>
        </CardWrapper>
        <CardWrapper title="Click for details">
          <Card>
            <img src={mando} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <p>overview </p>
            </Desc>
          </Card>
          <TitleCard>
            <p> Proje Name</p>

            <span></span>
          </TitleCard>
        </CardWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
