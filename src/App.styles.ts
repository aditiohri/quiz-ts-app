import styled, { createGlobalStyle } from "styled-components";

//@ts-ignore
import BGImage from "./assets/evgeni-tcherkasski-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background-image: url(${BGImage});
        background-size: cover;
    }

    * {
        box-sizing: border-box;
        font-family: 'Poppins'
    }

`;
