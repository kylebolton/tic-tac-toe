import React from "react";
import Table from "./Components/Table";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainContainer>
        <Table />
      </MainContainer>
    </React.Fragment>
  );
}

export default App;

const MainContainer = styled("div")`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  @keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }

  @keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }

  body {
    margin-top: 13.5rem;
    text-align: center;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
    animation: bg-scrolling-reverse 0.92s infinite;
    animation-timing-function: linear;
  }
`;
