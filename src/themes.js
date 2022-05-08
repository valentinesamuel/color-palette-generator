import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFFFFF",
  bgColor: "#FFFFFF",
  bgColor2: "#f7f7f7",
  btnTextColor: "#E1E1E1",
  textColor: "black",
  btnColor: "#6200EE",
  colorFrameBgColor: "#e9ecef",
  pColor: "#212529",
};
export const darkTheme = {
  body: "#292929",
  bgColor: "#292929",
  bgColor2: "#1E1E1E",
  pColor: "#f8f9fa",
  textColor: "#E1E1E1",
  btnTextColor: "black",
  btnColor: "#BB86FC",
  colorFrameBgColor: "#343a40 ",
};

export const GlobalStyles = createGlobalStyle`
body{
  background-color : ${({ theme }) => theme.body}
  }

  p{
color: ${({ theme }) => theme.pColor};
  }
 `;
