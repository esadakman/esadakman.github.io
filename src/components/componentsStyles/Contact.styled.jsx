import React, { useRef } from "react";
import {
  ContactContainer,
  SocialIcons,
  StyledContactForm,
} from "./componentsStyles/Contact.styled";

<<<<<<< HEAD
import emailjs from "@emailjs/browser";
import { toastError, toastSuccess } from "../helpers/customToastify";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";

const Contact = () => {
  const openInNewTab = (url) => {
    // 👇️ For opening the link in new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const form = useRef();
  // toastSuccess("Your email was sent successfully");
  const sendEmail = (e) => {
    e.preventDefault();
=======
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 7.5rem);
  background-color: ${({ theme }) => theme.colors.navBgColor};
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
  gap: 3rem;
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) { 
    flex: 1;
    align-items: center;
  }
  & > div.iconContainer {
    color: white;
    flex-wrap: wrap;
    min-width: 12rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    /* border: 1px solid red; */
    @media (max-width: ${({ theme }) => theme.size.lg}) {
      min-width: 8rem;
    }
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      min-width: 6rem;
    }
    & > i.linkedin {
      font-size: 8rem;
      border-radius: 50%;
      /* background-color: white; */
      padding: 1rem;
      transition: 0.5s all linear;
      color: ${({ theme }) => theme.colors.logoColor};
      @media (max-width: ${({ theme }) => theme.size.md}) {
        font-size: 6rem;
        padding: 0.5rem;
      }
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        font-size: 5rem;
      }
      &:hover {
        color: #4c60c9;
      }
    }
    & > i.github {
      font-size: 8rem;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.logoColor};
      padding: 1rem;
      transition: 0.5s all linear;
      &:hover {
        color: white;
      }
      @media (max-width: ${({ theme }) => theme.size.md}) {
        padding: 0.5rem;
        font-size: 6rem;
      }
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        font-size: 5rem;
      }
    }
    & > i.twitter {
      font-size: 6rem;
      width: 6rem;
      border-radius: 53%;
      color: ${({ theme }) => theme.colors.logoColor};
      padding: 2rem;
      transition: 0.5s all linear;
      &:hover {
        color: #1da1f2;
      }
      @media (max-width: ${({ theme }) => theme.size.md}) {
        padding: 1rem;
        font-size: 5rem;
      }
    }
    & > i.google {
      font-size: 6rem;
      border-radius: 50%;
      text-transform: none;
      padding: 2rem;
      color: ${({ theme }) => theme.colors.logoColor};
      padding: 2rem;
      transition: 0.5s all linear;
      &:hover {
        color: #d90d1e;
      }
      @media (max-width: ${({ theme }) => theme.size.md}) {
        padding: 0.5rem;
        font-size: 6rem;
      }
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        font-size: 5rem;
      }
    }
    & > span {
      margin-top: 0.5rem;
      font-size: 1.5rem;
      font-family: "Roboto", sans-serif;
      @media (max-width: ${({ theme }) => theme.size.md}) {
        padding: 0.5rem;
        font-size: 1rem;
      }
    }
  }
`;
>>>>>>> c67eded (css updates)

    emailjs
      .sendForm(
        "service_givwcr5",
        "template_rzqdnps",
        form.current,
        "Wz6M0q6D9oTRnYFcQ"
      )
      .then(
        (result) => {
          console.log(result.text); 
          toastSuccess("Your email was sent successfully");
        },
        (error) => {
          toastError(error.text); 
        }
      );
    e.target.reset();
  };
  return (
    <ContactContainer id="contact" name="contact">
      <ProjectsTitles style={{ color: "white" }}>Contact</ProjectsTitles>
      <SocialIcons>
        <div
          className="iconContainer"
          onClick={() => openInNewTab("https://www.linkedin.com/in/esadakman/")}
        >
          <i className="icon linkedin devicon-linkedin-plain"></i>
          <span className="name">LinkedIn</span>
        </div>
        <div
          className="iconContainer"
          onClick={() => openInNewTab("https://github.com/esadakman")}
        >
          <i className="icon github  devicon-github-original"></i>
          <span className="name">Github</span>
        </div>
        {/* <div
          className="iconContainer"
          onClick={() => openInNewTab("https://twitter.com/esadakman")}
        >
          <i className="icon twitter devicon-twitter-original"></i>
          <span className="name">Twitter</span>
        </div> */}
        <div
          className="iconContainer"
          onClick={() => (window.location = "mailto:esadd26@gmail.com")}
        >
          <i className="icon google devicon-google-plain colored"></i>
          <span className="name">Gmail</span>
        </div>
      </SocialIcons>
      <StyledContactForm>
        <h2>Send me a message</h2>
        {/* <p>
          Please feel free to contact me if you have any questions or would like
          to discuss working together.
        </p> */}
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="from_name"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
      </StyledContactForm>
    </ContactContainer>
  );
};

export default Contact;
