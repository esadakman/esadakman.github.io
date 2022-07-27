import React, { useRef } from "react";
import {
  ContactContainer,
  SocialIcons,
  StyledContactForm,
} from "./componentsStyles/Contact.styled";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const form = useRef();

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
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactContainer>
      <h1 className="title">Contact</h1>
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
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input type="email" name="from_name" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </StyledContactForm>
    </ContactContainer>
  );
};

export default Contact;
