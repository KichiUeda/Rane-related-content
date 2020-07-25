import React from "react";
import styled, { createGlobalStyle } from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

export const GlobalStyles = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

body {
  font-size: 62.5%;
  font-family: "Sofia Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  
}
`;

export const ColWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "normal")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  align-content: ${({ aligncontent }) =>
    aligncontent ? aligncontent : "center"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "none"};
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "normal")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  align-content: ${({ aligncontent }) =>
    aligncontent ? aligncontent : "center"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "none"};
`;
