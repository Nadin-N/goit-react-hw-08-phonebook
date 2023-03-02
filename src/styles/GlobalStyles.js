import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
	line-height: 1;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
}
li {
	list-style: none;
}
a {
	color: inherit;
	text-decoration: none;
}
img{
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
input,
button,
textarea {
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
}
button {
	cursor: pointer;
	color: inherit;
	background-color: inherit;
}
input{
	width: 100%;
}
html,
body{
	height: 100%;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
body{

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
background-color: #f5e1c7;
color: #113583;
}
`;
