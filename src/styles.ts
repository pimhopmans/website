import { createGlobalStyle } from "styled-components";

import MontserratBlack from "./assets/fonts/Montserrat-Black.ttf";
import MontserratBold from "./assets/fonts/Montserrat-Bold.ttf";
import MontserratRegular from "./assets/fonts/Montserrat-Regular.ttf";
import MontserratThin from "./assets/fonts/Montserrat-Thin.ttf";
import MontserratLight from "./assets/fonts/Montserrat-Light.ttf";
import MontserratItalic from "./assets/fonts/Montserrat-Italic.ttf";
import CormorantGaramondBold from "./assets/fonts/CormorantGaramond-Bold.ttf";
import CormorantGaramondRegular from "./assets/fonts/CormorantGaramond-Regular.ttf";
import CormorantGaramondItalic from "./assets/fonts/CormorantGaramond-Italic.ttf";

export default createGlobalStyle`
:root {
  font-family: 'Montserrat-Regular', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #faf9f6;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Montserrat-Black';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratBlack}) format('truetype'),
}

@font-face {
    font-family: 'Montserrat-Bold';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratBold}) format('truetype'),
}

@font-face {
    font-family: 'Montserrat-Regular';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratRegular}) format('truetype'),
}

@font-face {
  font-family: 'Montserrat-Thin';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratThin}) format('truetype'),
}
  
@font-face {
  font-family: 'Montserrat-Light';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratLight}) format('truetype'),
}

@font-face {
  font-family: 'Montserrat-Italic';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratItalic}) format('truetype'),
}

@font-face {
    font-family: 'CormorantGaramond-Bold';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${CormorantGaramondBold}) format('truetype'),
}

@font-face {
    font-family: 'CormorantGaramond-Regular';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${CormorantGaramondRegular}) format('truetype'),
}
    

@font-face {
    font-family: 'CormorantGaramond-Italic';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${CormorantGaramondItalic}) format('truetype'),
}
`;
