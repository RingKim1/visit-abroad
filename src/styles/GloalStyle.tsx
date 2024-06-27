import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

h1 {
  font-size: 30px;
  font-weight: 700;
}

h3 {
  font-size: 20px;
  font-weight: 600;
}

`;

export default GlobalStyle;
