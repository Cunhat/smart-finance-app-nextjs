import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFFFF",
    primary: {
      100: "#ecf1fe",
      500: "#3C76F1",
    },
    secondary: {
      100: "#CED3DD",
      500: "#082253",
    },
    warnings: {
      success: "#00C781",
      warning: "#FFBB38",
      danger: "#FF4040",
    },
    background: {
      primary: "#F5F8FA",
      secondary: "#EDF1F8",
    },
  },
  fontSizes: {
    title: "20px",
    regular: "16px",
    buttons: "16px",
    input: {
      label: "14px",
      placeholder: "16px",
      text: "16px",
    },
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const Theme = (props: ThemeProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
