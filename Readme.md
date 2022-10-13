## Portfolio Page  
## Introduction

When I started learning software, I wanted to create my own portfolio website. I wanted it to showcase my experience, education, projects and skills. I wasn't that good at designing websites in the beginning and I was looking for a portfolio template to help me get started. And after great research I found Harvey Delaney's devportfolio template on Github.

I loved its design, simplicity and customizability - it had everything I wanted in a template. So I built my portfolio using the template that still lives here. 

Although the original project was created with Angular and Typescript,  as time went on I wanted to add to new things to the portfolio, I was restricted by how it was implemented. I found myself shoehorning new features into the project. So, I decided to create my own portfolio using a more modern stack: React, Javascript and Styled Components.

Harvey's portfolio template helped me so much to get started with creating my own portfolio - I hope that this template will provide the same benefit to you!

Although I created this template from scratch, it is useful to point out that the design of the website is heavily influenced by the template that Harvey has created.

## Project Link 
#### You can reach my project from [here](https://esadakman.github.io/) 👈

## Project Skeleton

```
esadakman (folder)
|
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assets
│    │       │── projectPreviews
│    │       │     ├── HtmlProjects
│    │       │     ├── JavaScript
│    │       │     └── ReactJS
│    │       └── [images]
│    ├── components
│    │       ├── ComponentsStyles
│    │       │     ├── About.styled.jsx
│    │       │     ├── Contact.styled.jsx
│    │       │     ├── Education.styled.jsx
│    │       │     ├── Footer.styled.jsx
│    │       │     ├── Main.styled.jsx
│    │       │     ├── Navbar.styled.jsx
│    │       │     ├── ReactProjects.styled.jsx
│    │       │     └── Skills.styled.jsx
│    │       ├── globalStyles
│    │       │     ├── Global.styled.jsx 
│    │       │     └── theme
│    │       ├── projectsComponents
│    │       │     ├── HtmlCssProjects.jsx
│    │       │     ├── JavaScriptProjects.jsx
│    │       │     └── ReactProjects.jsx
│    │       ├── About.jsx
│    │       ├── Contact.jsx
│    │       ├── Education.jsx
│    │       ├── Footer.jsx
│    │       ├── Main.jsx
│    │       ├── Navbar.jsx
│    │       └── Skills.jsx
│    ├── helpers
│    │       ├── customToastify.js
│    │       ├── htmlProjects.js
│    │       ├── jsProjects.js
│    │       └── reactProjects.js 
│    ├── pages
│    │      ├── styles 
│    │      │     └── Projects.styled.jsx
│    │      ├── Home.jsx 
│    │      ├── Projects.jsx
│    │      └── ScrollToTop.jsx
│    ├── router
│    │       └─── Router.jsx 
│    ├── App.js
│    ├── App.csss
│    ├── index.js
│    └── index.scss 
├── package.json
└── yarn.lock

```


### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JS
- ReactJS
- Styled components
- React-router-dom
- gh-pages
- react-toastify

To run this project;

```
$ git clone https://github.com/esadakman/esadakman.github.io.git
$ cd ./esadakman.github.io
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project

![portfolio](https://user-images.githubusercontent.com/98649983/192007388-fca07b07-9396-40c7-985f-fb02ba869bc8.gif)

