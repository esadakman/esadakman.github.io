import weatherApp from "../assets/projectPreviews/JavaScript/WeatherApp.jpg";
import githubApi from "../assets/projectPreviews/JavaScript/githubApp.jpg";
import flagApp from "../assets/projectPreviews/JavaScript/flagApp.jpg";
import randomUser from "../assets/projectPreviews/JavaScript/randomUser.jpg";
import iosCalculator from "../assets/projectPreviews/JavaScript/iosCalculator.jpg";
import guessTheNumber from "../assets/projectPreviews/JavaScript/guessTheNumber.jpg";
import checkoutForm from "../assets/projectPreviews/JavaScript/checkoutForm.jpg";
import digitalClockJS from "../assets/projectPreviews/JavaScript/digitalClockJS.jpg";
import stopWatch from "../assets/projectPreviews/JavaScript/stopWatchJS.jpg";
import interactiveRating from "../assets/projectPreviews/JavaScript/interactiveRating.jpg"; 
import todoList from "../assets/projectPreviews/JavaScript/todoList.jpg"; 

const jsData = [
    {
      id: 1,
      imgSrc:  weatherApp ,
      projectName: "Weather App",
      overview: [
        " In this project, a simple Weather-App was made using the Weather Api data and axios library. User can can select the language (English or Turkish) and display current weather data of searched city around the world.",
      ],
      link: "https://github.com/esadakman/weatherApp",
    },
    {
      id: 2,
      imgSrc: todoList ,
      projectName: "Todo App",
      overview: [
        "In this project i used Bootstrap for styling and JavaScript for DOM manipulation. I tried to make responsible design and for the first time i use local storage in my projects.",
      ],
      link: "https://github.com/esadakman/todo_list_project",
    },
    {
      id: 3,
      imgSrc:  githubApi ,
      projectName: "Github Users",
      overview: [
        " For understanding API operations I designed a simple github users app",
        "You can searc users by their name and visit their profile with the provided link.",
      ],
      link: "https://github.com/esadakman/github_api",
    },
    {
      id: 4,
      imgSrc:  flagApp ,
      projectName: "Flag App",
      overview: [
        "In this project i made a simple flag app.",
        "After selecting the country from the dropdown list, you can see the relevant country's flag, capital, region, language and currency information.",
      ],
      link: "https://github.com/esadakman/flag_app",
    },
    {
      id: 5,
      imgSrc: randomUser ,
      projectName: "Random User Generator",
      overview: [
        "Project aims to create a Random User App.",
        "With this project I learned:",
        "Web API usage, try and catch blocks, async and await functions.",
      ],
      link: "https://github.com/esadakman/randomUserGenerator",
    },
    {
      id: 6,
      imgSrc:  iosCalculator ,
      projectName: "IOS Calculator",
      overview: [
        "For understanding DOM structure and javascript I made a simple ios calculator app",
      ],
      link: "https://github.com/esadakman/ios_calculator",
    },
    {
      id: 7,
      imgSrc:  guessTheNumber ,
      projectName: "Guess The Number",
      overview: [
        "I build a simple Guess the number game for improving my algorithmic design skills",
      ],
      link: "https://github.com/esadakman/guess-the-number",
    },
    {
      id: 8,
      imgSrc:  checkoutForm ,
      projectName: "Shopping Cart",
      overview: [
        " Project aims to create a real checkout page of e-commerce website.",
        "After the project i improved my knowledge of algorithmic design principles for dynamic calculation of product's cart",
      ],
      link: "https://github.com/esadakman/shopping_cart",
    },
    {
      id: 9,
      imgSrc:  digitalClockJS ,
      projectName: "Digital Clock",
      overview: [
        "Project aims to create a digital clock.",
        "I used async functions to create this app.",
      ],
      link: "https://github.com/esadakman/digital_clock",
    },
    {
      id: 10,
      imgSrc:  stopWatch ,
      projectName: "Stop Watch",
      overview: [
        "Project aims to create a StopWatch App.",
        "I made a simple StopWatch app with javaScript. It has only three features which are play, pause and reset.",
      ],
      link: "https://github.com/esadakman/stopWatch",
    },
    {
      id: 11,
      imgSrc:  interactiveRating ,
      projectName: "Interactive Rating Component",
      overview: [
        "Interactive Rating Component project which i found in frontendmentor.com and make with my friends from bootcamp.",
      ],
      link: "https://github.com/esadakman/Interactive-Rating-Component",
    },
     
     
  ];
  
  export default jsData;