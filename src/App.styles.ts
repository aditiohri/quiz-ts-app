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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #eee;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    color: #fff;
    font-family: "Work Sans";
    background-image: linear-gradient(180deg, #eee, #87f1ff);
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-background-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #eee, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
      max-width: 200px;
  }
`;
