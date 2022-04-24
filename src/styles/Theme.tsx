import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFFFF",
    primary: {
      100: "#ecf1fe",
      500: "#3C76F1",
      200: "#eef5fd",
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
      primary: "#FFF",
      secondary: "#EDF1F8",
      page: "#f6f7f8",
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
  shadows: {
    general: "0 -1px 2px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 16%)",
    hover: "0 -1px 8px 0 rgb(0 0 0 / 5%), 0 8px 16px 1px rgb(0 0 0 / 16%)",
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const Theme = (props: ThemeProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
