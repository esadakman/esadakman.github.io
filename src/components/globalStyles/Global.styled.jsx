import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    // box-sizing: border-box;
    // margin:0;
    font-family: 'Roboto', sans-serif; 
    ::-webkit-scrollbar {
      width: 0.9rem;
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        border-radius: 1rem;
        background: rgba(0, 0, 0, 0.1);
      }
      
      ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: rgba(0, 0, 0, 0.3);
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.4);
      }
      
      ::-webkit-scrollbar-thumb:active {
        background: rgba(0, 0, 0, .6);
      }
}
body{
    font-size: 1.5rem;
    ${({ theme }) => theme.colors.Bloggy1};
    background-color:${({ theme }) => theme.colors.Bloggy1};
  }
`;
