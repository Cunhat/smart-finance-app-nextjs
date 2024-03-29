import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 @font-face {
   font-family: "Smart Finance Ligth";
   src: url("/fonts/SourceSansPro-Light.ttf");
 }

 @font-face {
   font-family: "Smart Finance Regular";
   src: url("/fonts/SourceSansPro-Regular.ttf");
 }

 @font-face {
   font-family: "Smart Finance Bold";
   src: url("/fonts/SourceSansPro-SemiBold.ttf");
 }

*,
*::before,
*::after {
  box-sizing: border-box;
}


body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Smart Finance Regular";
}


a:not([class]) {
  text-decoration-skip-ink: auto;
}


img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
 
}
 
`;
