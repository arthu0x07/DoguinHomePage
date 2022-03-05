import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-gray: #EFEFEF;
    }

    * {
        margin: 0px; 
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body::-webkit-scrollbar {
        width: 15px;        
        border-radius: 5px;
        overflow: hidden;
    }

    body::-webkit-scrollbar-track {
     background: transparent; 
    }

    body::-webkit-scrollbar-thumb {
        background-color: #85b948;    
        border-radius: 20px;    
        border: 4px solid #EFEFEF;
    }

    #root{
        overflow: hidden;
    }
`;
