import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 7.5rem);
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.heroBg};
  background-image: radial-gradient(
      800px 400px at 20% 0%,
      rgba(3, 191, 203, 0.12),
      transparent 60%
    ),
    radial-gradient(700px 400px at 90% 100%, rgba(140, 60, 157, 0.14), transparent 60%);
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

export const StyledContactForm = styled.div`
  width: 70%;
  min-width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;

  color: white;
  & > h2 {
    margin: 1.5rem;
    width: 22rem;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) { 
    flex: 1;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 35rem;
    color: white;
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 90%;
      font-size: 1rem;
      gap: 1rem;
      input {
        color: white;
        transition: 0.3s all linear;
        width: 100%;
        height: 2.8rem;
        padding: 0.5rem 0;
        font-size: 1rem;
        text-indent: 1rem;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background-color: rgba(255, 255, 255, 0.06);
        ::placeholder {
          color: rgba(255, 255, 255, 0.55);
        }
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.turqo};
          box-shadow: 0 0 0 3px rgba(3, 191, 203, 0.15);
        }
      }
      textarea {
        color: white;
        font-size: 1rem;
        transition: 0.3s all linear;
        text-indent: 1rem;
        padding: 1rem 0;
        width: 100% !important;
        outline: none;
        resize: none;
        height: 7rem !important;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background-color: rgba(255, 255, 255, 0.06);
        ::placeholder {
          color: rgba(255, 255, 255, 0.55);
        }
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.turqo};
          box-shadow: 0 0 0 3px rgba(3, 191, 203, 0.15);
        }
      }

      & > button {
        cursor: pointer;
        transition: ${({ theme }) => theme.transition};
        background: ${({ theme }) => theme.colors.turqo};
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.15rem;
        color: #04121f;
        border: 1px solid ${({ theme }) => theme.colors.turqo};
        border-radius: ${({ theme }) => theme.radius.pill};
        padding: 0.85rem;
        width: 100%;

        &:hover {
          background: transparent;
          color: ${({ theme }) => theme.colors.turqo};
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(3, 191, 203, 0.3);
        }
      }
    }
  }
`;
