import React, { useRef } from "react";
import {
  ContactContainer,
  SocialIcons,
  StyledContactForm,
} from "./componentsStyles/Contact.styled";

import emailjs from "@emailjs/browser";
import { toastError, toastSuccess } from "../helpers/customToastify";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";

const Contact = () => {
  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const form = useRef();
  // toastSuccess("Your email was sent successfully");
  const sendEmail = (e) => {
    e.preventDefault();

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
        <div
          className="iconContainer"
          onClick={() => openInNewTab("https://twitter.com/esadakman")}
        >
          <i className="icon twitter devicon-twitter-original"></i>
          <span className="name">Twitter</span>
        </div>
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
