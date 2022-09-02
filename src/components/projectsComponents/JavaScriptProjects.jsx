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
import weatherApp from "../../assets/projectPreviews/JavaScript/WeatherApp.jpg";
import githubApi from "../../assets/projectPreviews/JavaScript/githubApp.jpg";
import flagApp from "../../assets/projectPreviews/JavaScript/flagApp.jpg";
import randomUser from "../../assets/projectPreviews/JavaScript/randomUser.jpg";
import iosCalculator from "../../assets/projectPreviews/JavaScript/iosCalculator.jpg";
import guessTheNumber from "../../assets/projectPreviews/JavaScript/guessTheNumber.jpg";
import checkoutForm from "../../assets/projectPreviews/JavaScript/checkoutForm.jpg";
import digitalClockJS from "../../assets/projectPreviews/JavaScript/digitalClockJS.jpg";
import stopWatch from "../../assets/projectPreviews/JavaScript/stopWatchJS.jpg";
import interactiveRating from "../../assets/projectPreviews/JavaScript/interactiveRating.jpg";
import todoList from "../../assets/projectPreviews/JavaScript/todoList.jpg";
import { useNavigate } from "react-router-dom";

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
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/weatherApp")
          }
        >
          <Card>
            <img src={weatherApp} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project, a simple Weather-App was made using the
                  Weather Api data and axios library. User can can select the
                  language (English or Turkish) and display current weather data
                  of searched city around the world.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Weather App</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/todo_list_project")
          }
        >
          <Card>
            <img src={todoList} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project i used Bootstrap for styling and JavaScript
                  for DOM manipulation. I tried to make responsible design and
                  for the first time i use local storage in my projects.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Todo App</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/github_api")
          }
        >
          <Card>
            <img src={githubApi} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  For understanding API operations I designed a simple github
                  users app
                </li>
                <li>
                  You can searc users by their name and visit their profile with
                  the provided link.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Github Users</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() => openInNewTab("https://github.com/esadakman/flag_app")}
        >
          <Card>
            <img src={flagApp} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>In this project i made a simple flag app.</li>
                <li>
                  After selecting the country from the dropdown list, you can
                  see the relevant country's flag, capital, region, language and
                  currency information.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Flag App</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/randomUserGenerator")
          }
        >
          <Card>
            <img src={randomUser} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>Project aims to create a Random User App.</li>
                <li>With this project I learned:</li>
                <li>
                  Web API usage, try and catch blocks, async and await functions
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Random User Generator</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab(" https://github.com/esadakman/ios_calculator")
          }
        >
          <Card>
            <img src={iosCalculator} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  For understanding DOM structure and javascript I made a simple
                  ios calculator app
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> IOS Calculator</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/guess-the-number")
          }
        >
          <Card>
            <img src={guessTheNumber} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  I build a simple Guess the number game for improving my
                  algorithmic design skills
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Guess The Number</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/shopping_cart")
          }
        >
          <Card>
            <img src={checkoutForm} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Project aims to create a real checkout page of e-commerce
                  website.
                </li>
                <li>
                  After the project i improved my knowledge of algorithmic
                  design principles for dynamic calculation of product's cart
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Shopping Cart </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/digital_clock")
          }
        >
          <Card>
            <img src={digitalClockJS} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>Project aims to create a digital clock.</li>
                <li>I used async functions to create this app.</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Digital Clock</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() => openInNewTab("https://github.com/esadakman/stopWatch")}
        >
          <Card>
            <img src={stopWatch} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>Project aims to create a StopWatch App.</li>
                <li>
                  I made a simple StopWatch app with javaScript. It has only
                  three features which are play, pause and reset.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Stop Watch</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab(
              "https://github.com/esadakman/Interactive-Rating-Component"
            )
          }
        >
          <Card>
            <img src={interactiveRating} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Interactive Rating Component project which i found in
                  frontendmentor.com and make with my friends from bootcamp.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Interactive Rating Component </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}

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
