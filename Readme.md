## Portfolio Page

## Introduction

When I first started learning software development, I wanted to create my own portfolio website to showcase my experience, education, projects, and skills. I wasn't very good at designing websites at the time, so I was looking for a portfolio template to help me get started.

After doing some research, I found Harvey Delaney's devportfolio template on GitHub. I loved its design, simplicity, and customizability, so I built my portfolio using that template.

Over time, I wanted to add new features to my portfolio, but I was limited by the way the original template was implemented. I found myself trying to force new features into the project, and I realized that I needed to create my own portfolio using a more modern stack.

That's why I created this portfolio template using React, JavaScript, and Styled Components. It's designed to be simple, customizable, and easy to use, and I hope it will provide the same benefit to you that Harvey's template provided to me.

Although I created this template from scratch, I must acknowledge that the design of the website is heavily influenced by Harvey's original template. Thank you, Harvey, for providing the inspiration for this project.

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
│    │       ├── Experience.jsx
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
- Styled Components
- React-router-dom
- gh-pages
- emailjs
- react-toastify

To run this project;

```
$ git clone https://github.com/esadakman/esadakman.github.io.git
$ cd ./esadakman.github.io
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project

![portfolio](https://user-images.githubusercontent.com/98649983/221642819-1b1a6979-5862-43c5-8325-5daa3a5c3ca7.gif)

<!-- <img width="759" alt="gh-pages" src="https://user-images.githubusercontent.com/98649983/221643249-a32297dd-d68e-4a70-baa0-29f3d5de79dd.png">
yarn run deploy -->
