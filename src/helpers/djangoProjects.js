import djangoBlogDRF from "../assets/projectPreviews/DjangoProjects/djangoBlogAppDRF.jpg";
import djangoBlog from "../assets/projectPreviews/DjangoProjects/djangoBlogApp.jpg";
import djangoPersonnelAppDRF from "../assets/projectPreviews/DjangoProjects/djangoPersonnelAppDRF.jpg";
import djangoStockAppDRF from "../assets/projectPreviews/DjangoProjects/djangoStockAppDRF.jpg";
import djangoFlightAppDRF from "../assets/projectPreviews/DjangoProjects/djangoFlightAppDRF.jpg";
import djangoQuizAppDRF from "../assets/projectPreviews/DjangoProjects/djangoQuizAppDRF.jpg";
import djangoTodoAuth from "../assets/projectPreviews/DjangoProjects/djangoTodoAuth.jpg";
import djangoWeatherApp from "../assets/projectPreviews/DjangoProjects/djangoWeatherApp.jpg"; 
import djangoPizzaApp from "../assets/projectPreviews/DjangoProjects/djangoPizzaApp.jpg";
import djangoAuthentication from "../assets/projectPreviews/DjangoProjects/djangoAuthentication.jpg";
import djangoStudentForm from "../assets/projectPreviews/DjangoProjects/djangoStudentForm.jpg";

const djangoData = [
  {
    id: 1,
    imgSrc: djangoBlogDRF,
    projectName: "Full Stack - Blog App",
    overview: [
      "This is the backend side of my Full Stack Blog App project.",
      "I used reactjs for frontend.",
    ],
    link: "https://github.com/esadakman/fs-blog-app-django-drf",
  },
  {
    id: 2,
    imgSrc: djangoBlog,
    projectName: "Django Blog App",
    overview: [
      "Created a Blog application with Django that allows users to create, edit and delete posts.",
      "The homepage lists all blog posts and each post has a dedicated detail page for comments and likes.",
      "Notions I have learned from this projects are includes authentication, database relations, Class based views and Function based views, Django Template language, and HTMX.",
    ],
    link: "https://github.com/esadakman/django-blog-app",
  },
  {
    id: 3,
    imgSrc: djangoPersonnelAppDRF,
    projectName: "Personnel List App",
    overview: [
      "This is my first full stack app project which name is Personnel list app.",
      "I used reactjs for frontend.",
    ],
    link: "https://github.com/esadakman/django-personnel-app-backend",
  },
  {
    id: 4,
    imgSrc: djangoStockAppDRF,
    projectName: "Stock App",
    overview: [
      "I created a Stock Manegement API with Django Rest Framework that allows users to",
      "register/login/logout",
      "CRUD operations for Product,Transaction,Firm, Brand, and Category acoording to user's role",
    ],
    link: "https://github.com/esadakman/django-stock-app",
  },
  {
    id: 5,
    imgSrc: djangoFlightAppDRF,
    projectName: "Flight App",
    overview: [
      "I created a Flight Reservation API with Django Rest Framework that allows users to",
      "register/login/logout",
      "crud operations for flights",
      "crud operations for reservations",
    ],
    link: "https://github.com/esadakman/django-flight-app",
  },
  {
    id: 6,
    imgSrc: djangoQuizAppDRF,
    projectName: "Quiz App",
    overview: [
      "I created a Quiz Application with Django Rest Framework that allows users to",
      "register/login/logout",
      "View quizzes and questions",
      "CRUD quizzes and questions(stuff only)",
    ],
    link: "https://github.com/esadakman/django-quiz-app",
  },
  {
    id: 7,
    imgSrc: djangoTodoAuth,
    projectName: "Todo App (Auth)",
    overview: [
      "This is a simple Todo application built with Django.",
      "Apart from my previous todo app, you need to login to add todo in this project.",
      "With this project i understand how to use Django to create forms and authenticate users.",
    ],
    link: "https://github.com/esadakman/django-auth-todo",
  },
  {
    id: 8,
    imgSrc: djangoWeatherApp,
    projectName: "Django Weather App",
    overview: [
      "This is a weather app where API requests were made visual using Django.",
      "API service used in this is project is from openweathermap",
    ],
    link: "https://github.com/esadakman/django-weather-app",
  }, 
  {
    id: 9,
    imgSrc: djangoPizzaApp,
    projectName: "Alfredo's Pizza Cafe",
    overview: [
      "In this project, i created a Django app named 'Alfredos Pizza Cafe' which will let users to order pizza.",
      "Most websites require the use of forms to receive data from users, so it is crucial to know how to safely collect and handle data while maintaining a user-friendly experience on your website.",
      "With this project I understand better how to use Django to create forms.",
    ],
    link: "https://github.com/esadakman/django-pizza-app",
  },
  {
    id: 10,
    imgSrc: djangoAuthentication,
    projectName: "Django Authentication",
    overview: [
      "In this project, i created a simple user registration and login page application app for understanding django authentication system.",
    ],
    link: "https://github.com/esadakman/django-auth",
  },
  {
    id: 11,
    imgSrc: djangoStudentForm,
    projectName: "Django Student CRUD",
    overview: [
      "Practice Django to implement CRUD (Create, Read, Update, Delete) operations.",
    ],
    link: "https://github.com/esadakman/django_crud_project",
  },
];

export default djangoData;
