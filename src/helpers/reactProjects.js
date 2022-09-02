import fireContact from "../assets/projectPreviews/ReactJS/fireContact.png"; 
import MovieApp from "../assets/projectPreviews/ReactJS/MovieApp.jpg";
import RecipeApp from "../assets/projectPreviews/ReactJS/RecipeApp.jpg";
import taskTracker from "../assets/projectPreviews/ReactJS/taskTracker.jpg";
import apiTutorial from "../assets/projectPreviews/ReactJS/apiTutorial.png";
import randomUserTwo from "../assets/projectPreviews/ReactJS/randomUserTwo.jpg";
import weatherApp from "../assets/projectPreviews/ReactJS/weatherApp.jpg";
import randomUserOne from "../assets/projectPreviews/ReactJS/randomUserOne.jpg";
import axiosRouterExercise from "../assets/projectPreviews/ReactJS/axiosRouterExercise.jpg";
import reviewsProject from "../assets/projectPreviews/ReactJS/reviewsProject.jpg";
import stopWatch from "../assets/projectPreviews/ReactJS/stopWatch.jpg";
import TourPlaces from "../assets/projectPreviews/ReactJS/TourPlaces.jpg";
import digitalClock from "../assets/projectPreviews/ReactJS/digitalClock.jpg";
import languageCards from "../assets/projectPreviews/ReactJS/languageCards.jpg";
import fireBlog from "../assets/projectPreviews/ReactJS/fireBlog.jpg";
import fakeTweet from "../assets/projectPreviews/ReactJS/fakeTweet.jpg";

const reactData = [
  {
    id: 1,
    imgSrc:  fireBlog ,
    projectName: "Fire Blog",
    overview: [
      " In this project, I designed a Fire Blog with many features.",
      "I used context API for state management, Firebase for authentication, and Firestore database for CRUD operations.",
    ],
    link: "https://github.com/esadakman/FireBlog-Milestone",
  },
  {
    id: 2,
    imgSrc: fireContact ,
    projectName: "FireContact",
    overview: [
      "In this project, I designed a Contact App for understanding CRUD operations.",
      "I used Firebase Realtime Database for database.",
      "User can update the list by entering name, phone number and gender information.And also user can delete or fix any contact from table..",
    ],
    link: "https://github.com/esadakman/firecontact-app",
  },
  {
    id: 3,
    imgSrc:  MovieApp ,
    projectName: "Movie App",
    overview: [
      "In this project, I designed a Movie App with many features. I provided the movie information with the TMDB API.",
      "I used Firebase for authentication.",
      "The user can log in and register with both their email address and their Google account.",
    ],
    link: "https://github.com/esadakman/movie-app-firebase",
  },
  {
    id: 4,
    imgSrc:  RecipeApp ,
    projectName: "Recipe App",
    overview: [
      "In this project i tried to make a recipe app.",
      "I used local storage for authentication.",
      "After login you can search food's recipe by their name and type.",
    ],
    link: "https://github.com/esadakman/recipe-app",
  },
  {
    id: 5,
    imgSrc: taskTracker ,
    projectName: "Task Tracker",
    overview: [
      "In this project i tried to make a build simple task tracker app.",
      "User can add new task to tracker list with date and time",
      "And remove them from list after finish the task.",
    ],
    link: "https://github.com/esadakman/task-tracker-react",
  },
  {
    id: 6,
    imgSrc:  apiTutorial ,
    projectName: "API Tutorial",
    overview: [
      "In this project, I made CRUD operations using the real API.",
      "You can add, delete or edit new entries in the list.",
    ],
    link: "https://github.com/esadakman/api-tutorial-project",
  },
  {
    id: 7,
    imgSrc:  randomUserTwo ,
    projectName: "Random User App 2",
    overview: [
      "In this project i make random user app, but this time you can save the users info's and when you hover the logos in the menu",
      "User's information will change depending on the logo.",
    ],
    link: "https://github.com/esadakman/random-user-app-2",
  },
  {
    id: 8,
    imgSrc:  weatherApp ,
    projectName: "Weather App",
    overview: [
      "Remake of the javaScript Weather App with React",
      "Project aims to display current weather data of searched city around the world with fetching Weather Api data.",
    ],
    link: "https://github.com/esadakman/react-weather-app",
  },
  {
    id: 9,
    imgSrc:  axiosRouterExercise ,
    projectName: "Axios-Router Project",
    overview: [
      "I prepared a small-scale project in order to understand the Router Dom and the Material UI framework that I have learned recently.",
      "In addition to Material UI, I also used the Bootstrap for pagination process and card design.",
    ],
    link: "https://github.com/esadakman/axios-router-project",
  },
  {
    id: 10,
    imgSrc:  randomUserOne ,
    projectName: "Random User App",
    overview: [
      "In this project i tried to make a simple random user app.",
      "I use axios for fetching data.",
      "User can get random profiles by clicking the button",
    ],
    link: "https://github.com/esadakman/random-user-react",
  },
  {
    id: 11,
    imgSrc:  randomUserOne ,
    projectName: "Random User App",
    overview: [
      "In this project i tried to make a simple random user app.",
      "I use axios for fetching data.",
      "User can get random profiles by clicking the button",
    ],
    link: "https://github.com/esadakman/random-user-react",
  },
  {
    id: 12,
    imgSrc:  reviewsProject ,
    projectName: "Reviews Project",
    overview: [
      "Project aims to create a Review Project App.",
      "Customers comments change automatically, and they can also be changed by clicking the go and back buttons",
      "If the user wants to see a random comment, he/she can press the 'Surprise me' button and see it. Customer informations comes from local json file.",
    ],
    link: "https://github.com/esadakman/reviews-project",
  },
  {
    id: 13,
    imgSrc:  stopWatch ,
    projectName: "StopWatch",
    overview: [
      "For understanding useState hooks and components i made a simple StopWatch app",
      "It has only three features which are play, pause and reset.",
    ],
    link: "https://github.com/esadakman/stopWatch-react",
  },
  {
    id: 14,
    imgSrc:  digitalClock ,
    projectName: "Digital Clock",
    overview: ["Remake of the javaScript digital clock project with React"],
    link: "https://github.com/esadakman/react-digital-clock",
  },
  {
    id: 15,
    imgSrc:  languageCards ,
    projectName: "Language Cards",
    overview: [
      "In this project for understanding react structure, i tried to make a simple language cards app.",
      "I get the data from locally and i use SASS for the design",
    ],
    link: "https://github.com/esadakman/language-cards-react",
  },
  {
    id: 16,
    imgSrc: TourPlaces,
    projectName: "Tour Places",
    overview: [
      "In this project for understanding react structure, i tried to make a simple tour places app.",
      "I get the data from locally and i use SASS for the design", 
    ],
    link: "https://github.com/esadakman/tour-places-react",
  },
];

export default reactData;
