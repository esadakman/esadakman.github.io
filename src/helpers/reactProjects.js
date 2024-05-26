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
import digitalClock from "../assets/projectPreviews/ReactJS/digitalClock.jpg";
import fireBlog from "../assets/projectPreviews/ReactJS/fireBlog.jpg";
import fakeTweet from "../assets/projectPreviews/ReactJS/fakeTweet.jpg";
import githubFinder from "../assets/projectPreviews/ReactJS/githubFinder.jpg";
import youtubeClone from "../assets/projectPreviews/ReactJS/youtubeClone.jpg";
import personnelApp from "../assets/projectPreviews/ReactJS/personnelApp.jpg";
import fsBlogApp from "../assets/projectPreviews/ReactJS/fsBlogApp.jpg";
import nextjsAirbnbClone from "../assets/projectPreviews/ReactJS/nextjsAirbnbClone.jpg";
import nextjsPhotography from "../assets/projectPreviews/ReactJS/nextjsPhotography.jpg";

const reactData = [
  {
    id: 1,
    imgSrc: fsBlogApp,
    projectName: "Full Stack Blog App",
    overview: [
      "This is the frontend side of my full stack blog app project.",
      "I used django for backend.",
    ],
    link: "https://github.com/esadakman/fs-reactjs-blog-app",
  },
  {
    id: 2,
    imgSrc: fireBlog,
    projectName: "Fire Blog",
    overview: [
      " In this project, I designed a Fire Blog with many features.",
      "I used context API for state management, Firebase for authentication, and Firestore database for CRUD operations.",
    ],
    link: "https://github.com/esadakman/reactjs-fireblog",
  },
  {
    id: 3,
    imgSrc: personnelApp,
    projectName: "Full Stack Personnel App",
    overview: [
      "This is the frontend side of my personnel list app project.",
      "Company personnel who have logged into the system will be able to see the company's departments on the home page and the personnel working under that section in detail.",
      "There will be update delete and add personnel buttons for the personnel who are staff. And these personnel will be able to add new personnel to the list and update them.",
      "Only superusers will have the authority to delete staff.",
    ],
    link: "https://github.com/esadakman/reactjs-personnel-app-frontend",
  },
  {
    id: 4,
    imgSrc: fireContact,
    projectName: "Fire Contact",
    overview: [
      "In this project, I designed a Contact App for understanding CRUD operations.",
      "I used Firebase Realtime Database for database.",
      "User can update the list by entering name, phone number and gender information.And also user can delete or fix any contact from table..",
    ],
    link: "https://github.com/esadakman/reactjs-fireContact",
  },
  {
    id: 5,
    imgSrc: MovieApp,
    projectName: "Movie App",
    overview: [
      "In this project, I designed a Movie App with many features. I provided the movie information with the TMDB API.",
      "I used Firebase for authentication.",
      "The user can log in and register with both their email address and their Google account.",
    ],
    link: "https://github.com/esadakman/reactjs-movie-app",
  },
  {
    id: 6,
    imgSrc: RecipeApp,
    projectName: "Recipe App",
    overview: [
      "In this project i tried to make a recipe app.",
      "I used local storage for authentication.",
      "After login you can search food's recipe by their name and type.",
    ],
    link: "https://github.com/esadakman/reactjs-recipe-app",
  },
  {
    id: 19,
    imgSrc: nextjsAirbnbClone,
    projectName: "NextJS Airbnb Clone",
    overview: [
      "I prepared a small-scale project in order to understand the NextJS that I have learned recently.",
      "I use Mabpox, react-map-gl and geolib for maps and locations and TailwindCSS for styling.",
    ],
    link: "https://github.com/esadakman/nextjs-airbnb-clone",
  },
  {
    id: 20,
    imgSrc: nextjsPhotography,
    projectName: "NextJS Photography App",
    overview: [
      "I prepared a small-scale project in order to understand the NextJS that I have learned recently.",
    ],
    link: "https://github.com/esadakman/nextjs-photography-app",
  },
  {
    id: 7,
    imgSrc: apiTutorial,
    projectName: "API Tutorial",
    overview: [
      "In this project, I made CRUD operations using the real API.",
      "You can add, delete or edit new entries in the list.",
    ],
    link: "https://github.com/esadakman/reactjs-api-tutorial",
  },
  {
    id: 8,
    imgSrc: taskTracker,
    projectName: "Task Tracker",
    overview: [
      "In this project i tried to make a build simple task tracker app.",
      "User can add new task to tracker list with date and time",
      "And remove them from list after finish the task.",
    ],
    link: "https://github.com/esadakman/reactjs-task-tracker",
  },
  {
    id: 9,
    imgSrc: randomUserTwo,
    projectName: "Random User App 2",
    overview: [
      "In this project i make random user app, but this time you can save the users info's and when you hover the logos in the menu",
      "User's information will change depending on the logo.",
    ],
    link: "https://github.com/esadakman/reactjs-random-user-2",
  },
  {
    id: 10,
    imgSrc: weatherApp,
    projectName: "Weather App",
    overview: [
      "Remake of the javaScript Weather App with React",
      "Project aims to display current weather data of searched city around the world with fetching Weather Api data.",
    ],
    link: "https://github.com/esadakman/reactjs-weather-app",
  },
  {
    id: 11,
    imgSrc: youtubeClone,
    projectName: "Youtube Clone",
    overview: ["I made a Youtube Clone project with rapidAPI"],
    link: "https://github.com/esadakman/reactjs-youtube-clone",
  },
  {
    id: 12,
    imgSrc: axiosRouterExercise,
    projectName: "Axios-Router Project",
    overview: [
      "I prepared a small-scale project in order to understand the Router Dom and the Material UI framework that I have learned recently.",
      "In addition to Material UI, I also used the Bootstrap for pagination process and card design.",
    ],
    link: "https://github.com/esadakman/reactjs-axios-router",
  },
  {
    id: 13,
    imgSrc: githubFinder,
    projectName: "Github Finder",
    overview: [
      "I prepared a small-scale project in order to remember the Fetch API and the react structure. ",
      "To get the data i used the Github API",
    ],
    link: "https://github.com/esadakman/reactjs-github-finder",
  },
  {
    id: 14,
    imgSrc: randomUserOne,
    projectName: "Random User App",
    overview: [
      "In this project i tried to make a simple random user app.",
      "I use axios for fetching data.",
      "User can get random profiles by clicking the button",
    ],
    link: "https://github.com/esadakman/reactjs-github-finder",
  },
  {
    id: 15,
    imgSrc: fakeTweet,
    projectName: "Fake Tweet Generator",
    overview: [
      "In this project, I designed fake tweet generator.",
      "After the necessary information is entered, the relevant tweet can be downloaded or the last tweet of the user can be downloaded by searching for the user name.",
    ],
    link: "https://github.com/esadakman/reactjs-tweet-generator",
  },
  {
    id: 16,
    imgSrc: reviewsProject,
    projectName: "Reviews Project",
    overview: [
      "Project aims to create a Review Project App.",
      "Customers comments change automatically, and they can also be changed by clicking the go and back buttons",
      "If the user wants to see a random comment, he/she can press the 'Surprise me' button and see it. Customer informations comes from local json file.",
    ],
    link: "https://github.com/esadakman/reactjs-reviews-project",
  },
  {
    id: 17,
    imgSrc: stopWatch,
    projectName: "StopWatch",
    overview: [
      "For understanding useState hooks and components i made a simple StopWatch app",
      "It has only three features which are play, pause and reset.",
    ],
    link: "https://github.com/esadakman/reactjs-stop-watch",
  },
  {
    id: 18,
    imgSrc: digitalClock,
    projectName: "Digital Clock",
    overview: ["Remake of the javaScript digital clock project with React"],
    link: "https://github.com/esadakman/reactjs-digital-clock",
  },
];

export default reactData;
