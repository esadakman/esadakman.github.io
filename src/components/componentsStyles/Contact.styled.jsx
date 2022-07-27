import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.navBgColor};

  & > h1.title {
    position: relative;
    color: white;
    ::after {
      content: "";
      background: ${({ theme }) => theme.colors.mainColor};
      position: absolute;
      text-align: center;
      bottom: -5px;
      left: 10%;
      height: 8%;
      width: 80%;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid red;
  gap: 3rem;
  & > div.iconContainer {
    color: wheat;
    flex-wrap: wrap;
    /* width: 23%; */
    min-width: 12rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    & > i.linkedin {
      font-size: 8rem;
      border-radius: 50%;
      /* background-color: white; */
      padding: 1rem;
      transition: 0.5s all linear;
      color: ${({ theme }) => theme.colors.logoColor};

      :hover {
        color: #4c60c9;
      }
    }
    & > i.github {
      font-size: 8rem;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.logoColor};
      padding: 1rem;
      transition: 0.5s all linear;
      :hover {
        /* color: #4c60c9; */
        color: white;
      }
    }
    & > i.twitter {
      font-size: 6rem;
      width: 6rem;
      border-radius: 53%;
      color: ${({ theme }) => theme.colors.logoColor};
      padding: 2rem;
      transition: 0.5s all linear;
      :hover {
        color: #1da1f2;
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
      :hover {
        /* color: #1da1f2; */
        text-decoration: none;
        color: inherit;
      }
    }
    & > span {
      margin-top: 0.5rem;
      font-size: 1.5rem;
      font-family: "Roboto", sans-serif;
    }
  }
`;

export const StyledContactForm = styled.div`
  width: 90%;
  & > div {
    display: flex;
    justify-content: flex-start;
    border: 1px solid red;
    width: 400px;
    color: white;
    padding: 1rem;
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      font-size: 1rem;
      input {
        width: 100%;
        height: 2rem;
        padding: 0.5rem;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 0.5rem;

        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      label {
        margin-top: 1rem;
      }
      input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: rgb(249, 105, 14);
        color: white;
        border: none;
      }
    }
  }
`;
