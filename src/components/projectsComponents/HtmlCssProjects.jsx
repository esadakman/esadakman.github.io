import React from "react";
import { Flex } from "../componentsStyles/Main.styled";
import {
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  ProjectsTitles,
  TitleCard,
} from "../componentsStyles/ReactProjects.styled";
import checkoutHtml from "../../assets/projectPreviews/HtmlProjects/checkoutHtml.jpg";
import fourCard from "../../assets/projectPreviews/HtmlProjects/fourCard.jpg";
import parallax from "../../assets/projectPreviews/HtmlProjects/parallax.jpg";
import lightSaber from "../../assets/projectPreviews/HtmlProjects/lightSaber.jpg";
import bootstrapLandingPage from "../../assets/projectPreviews/HtmlProjects/bootstrapLandingPage.jpg";
import sassPortfolio from "../../assets/projectPreviews/HtmlProjects/sassPortfolio.jpg";
import breakpointsNavbar from "../../assets/projectPreviews/HtmlProjects/breakpointsNavbar.jpg";
import google from "../../assets/projectPreviews/HtmlProjects/google.jpg";
import netflix from "../../assets/projectPreviews/HtmlProjects/netflix.jpg";
import udemy from "../../assets/projectPreviews/HtmlProjects/udemy.jpg";

const HtmlCssProjects = () => {
  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Flex>
        <ProjectsTitles className="titles">Html/CSS Projects</ProjectsTitles>
      </Flex>
      <ProjectsContainer>
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/bootstrap-landing-page")
          }
        >
          <Card>
            <img src={bootstrapLandingPage} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>This website is made with Bootstrap.</li>
                <li>
                  I used Bootstrap Navbar component to create a simple
                  collapsable navbar.
                </li>
                <li>I used Carousel, Card, and Nav components for styling.</li>
                <li>I created form element using Bootstrap.</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Bootstrap Landing Page </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/Sass-Portfolio")
          }
        >
          <Card>
            <img src={sassPortfolio} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Portfolio website is designed using HTML and SASS (SCSS) codes
                  for style.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p>SASS Portfolio </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}

        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab(
              "https://github.com/esadakman/checkout_form_responsive"
            )
          }
        >
          <Card>
            <img src={checkoutHtml} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Checkout Form for improving responsive design abilities.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Checkout Form </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://esadakman.github.io/four_card_feature/")
          }
        >
          <Card>
            <img src={fourCard} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Responsive web page project called "four-card feature" which i
                  found in "frontendmentor.com".
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Four-Card Feature </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab(
              "https://github.com/esadakman/bootstrap_breakpoints_navbar"
            )
          }
        >
          <Card>
            <img src={breakpointsNavbar} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  Bootstrap Breakpoints Navbar project for understanding grid
                  and bootstrap
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Bootstrap Breakpoints Navbar</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/starwars_parallax")
          }
        >
          <Card>
            <img src={parallax} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  This is my parallax project and i use star wars theme for
                  creating this website.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Star Wars Parallax </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/lightsaber")
          }
        >
          <Card>
            <img src={lightSaber} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  I made a light saber for improving my animations skills{" "}
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Light Saber </p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}

        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/google_landing_page")
          }
        >
          <Card>
            <img src={google} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>Project aims to create google landing page.</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Google Landing Page</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/netflix-clone")
          }
        >
          <Card>
            <img src={netflix} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>I desidn a netflix clone with using figma</li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Netflix Clone</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
        <CardWrapper
          title="Click for details"
          onClick={() =>
            openInNewTab("https://github.com/esadakman/udemy-portfolio")
          }
        >
          <Card>
            <img src={udemy} alt="project preview" />
            <Desc>
              <h2>Overview</h2>
              <ul>
                <li>
                  My landing page project which i made in my udemy classes.
                </li>
              </ul>
            </Desc>
          </Card>
          <TitleCard>
            <p> Udemy Portfolio</p>
          </TitleCard>
        </CardWrapper>
        {/* // ! ===================================== */}
      </ProjectsContainer>
    </>
  );
};

export default HtmlCssProjects;
