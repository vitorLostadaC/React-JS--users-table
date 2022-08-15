import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --background: #f0f0f0;
  --table-bg: #fff;
  --table-text: #4a4a4a;
  --table-bg-hover: #e6ffff;
  --table-bg-striped: #f2f2f2;
  --table-menu-checkbox: #33cccc;
}

html {
  

  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}



body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialised;
  background: var(--background)
}


body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

a {
    text-decoration: none;
  }

button {
  cursor: pointer;
}

[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}

`;
