import React from "react";
import {
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  TitleCard,
} from "../componentsStyles/ReactProjects.styled";
import mando from "../../assets/mando.png";
import fireContact from "../../assets/projectPreviews/ReactJS/fireContact.png";
import MovieApp from "../../assets/projectPreviews/ReactJS/MovieApp.jpg";
import RecipeApp from "../../assets/projectPreviews/ReactJS/RecipeApp.jpg";
import taskTracker from "../../assets/projectPreviews/ReactJS/taskTracker.jpg";
import apiTutorial from "../../assets/projectPreviews/ReactJS/apiTutorial.png";
import randomUserTwo from "../../assets/projectPreviews/ReactJS/randomUserTwo.jpg";
import weatherApp from "../../assets/projectPreviews/ReactJS/weatherApp.jpg";
import randomUserOne from "../../assets/projectPreviews/ReactJS/randomUserOne.jpg";
import axiosRouterExercise from "../../assets/projectPreviews/ReactJS/axiosRouterExercise.jpg";
import reviewsProject from "../../assets/projectPreviews/ReactJS/reviewsProject.jpg";
import stopWatch from "../../assets/projectPreviews/ReactJS/stopWatch.jpg";
import TourPlaces from "../../assets/projectPreviews/ReactJS/TourPlaces.jpg";
import digitalClock from "../../assets/projectPreviews/ReactJS/digitalClock.jpg";
import languageCards from "../../assets/projectPreviews/ReactJS/languageCards.jpg";

import { Title } from "../componentsStyles/About.styled";
import { Flex } from "../componentsStyles/Main.styled";

const ReactProjects = () => {
  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Flex>
        <Title>My Projects</Title>
      </Flex>
      <ProjectsContainer>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/firecontact-app")
          }
        >
          <Card>
            <img src={fireContact} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project, I designed a Contact App for understanding
                  CRUD operations.
                </li>
                <li>I used Firebase Realtime Database for database.</li>
                <li>
                  User can update the list by entering name, phone number and
                  gender information.And also user can delete or fix any contact
                  from table.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> FireContact App</p>
          </TitleCard>
        </CardWrapper>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/movie-app-firebase")
          }
        >
          <Card>
            <img src={MovieApp} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              {/* <p> */}
              <ul>
                <li>
                  In this project, I designed a Movie App with many features. I
                  provided the movie information with the TMDB API.
                </li>
                <li>I used Firebase for authentication.</li>
                <li>
                  The user can log in and register with both their email address
                  and their Google account.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Movie App</p>
          </TitleCard>
        </CardWrapper>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/recipe-app")
          }
        >
          <Card>
            <img src={RecipeApp} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>In this project i tried to make a recipe app.</li>
                <li>I used local storage for authentication.</li>
                <li>
                  After login you can search food's recipe by their name and
                  type.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Recipe App</p>
          </TitleCard>
        </CardWrapper>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/task-tracker-react")
          }
        >
          <Card>
            <img src={taskTracker} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project i tried to make a build simple task tracker
                  app.
                </li>
                <li>
                  User can add new task to tracker list with date and time
                </li>
                <li>And remove them from list after finish the task.</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Task Tracker App</p>
          </TitleCard>
        </CardWrapper>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/api-tutorial-project")
          }
        >
          <Card>
            <img src={apiTutorial} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project, I made CRUD operations using the real API.{" "}
                </li>
                <li>You can add, delete or edit new entries in the list.</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>API Tutorial</p>
          </TitleCard>
        </CardWrapper>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/random-user-app-2 ")
          }
        >
          <Card>
            <img src={randomUserTwo} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project i make random user app, but this time you can
                  save the users info's and when you hover the logos in the menu
                </li>
                <li>User's information will change depending on the logo.</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Random User App 2</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/react-weather-app ")
          }
        >
          <Card>
            <img src={weatherApp} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>Remake of the javaScript Weather App with React</li>
                <li>
                  Project aims to display current weather data of searched city
                  around the world with fetching Weather Api data.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Weather App</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/axios-router-project ")
          }
        >
          <Card>
            <img src={axiosRouterExercise} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  I prepared a small-scale project in order to understand the
                  Router Dom and the Material UI framework that I have learned
                  recently.
                </li>
                <li>
                  In addition to Material UI, I also used the Bootstrap for
                  pagination process and card design.
                </li>
                <li></li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Axios-Router Project</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/random-user-react")
          }
        >
          <Card>
            <img src={randomUserOne} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project i tried to make a simple random user app.
                </li>
                <li>I use axios for fetching data. </li>
                <li>User can get random profiles by clicking the button</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Random User App</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab(
              " https://github.com/esadakman/reviews-project/blob/master/README.md"
            )
          }
        >
          <Card>
            <img src={reviewsProject} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>Project aims to create a Review Project App.</li>
                <li>
                  Customers comments change automatically, and they can also be
                  changed by clicking the go and back buttons
                </li>
                <li>
                  If the user wants to see a random comment, he/she can press
                  the "Surprise Me" button and see it. Customer informations
                  comes from local json file.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Reviews Project</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab(" https://github.com/esadakman/stopWatch-react")
          }
        >
          <Card>
            <img src={stopWatch} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  For understanding useState hooks and components i made a
                  simple StopWatch app.{" "}
                </li>
                <li>
                  It has only three features which are play, pause and reset.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>StopWatch</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}

        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/react-digital-clock ")
          }
        >
          <Card>
            <img src={digitalClock} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Remake of the javaScript digital clock project with React
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Digital Clock</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}

        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/language-cards-react ")
          }
        >
          <Card>
            <img src={languageCards} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project for understanding react structure, i tried to
                  make a simple language cards app.
                </li>
                <li>
                  {" "}
                  I get the data from locally and i use SASS for the design
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Language Cards</p>
          </TitleCard>
        </CardWrapper>

        {/* //! ============Divider=========================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/tour-places-react")
          }
        >
          <Card>
            <img src={TourPlaces} alt="poster" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  In this project for understanding react structure, i tried to
                  make a simple tour places app.{" "}
                </li>
                <li>
                  I get the data from locally and i use SASS for the design
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>Tour Places</p>
          </TitleCard>
        </CardWrapper>
        {/* //! ============Divider=========================== */}

        <CardWrapper
          title="Click for details"
          onClick={() => openInNewTab(" ")}
        >
          <Card>
            <img src={mando} alt="poster" />
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
    </>
  );
};

export default ReactProjects;
