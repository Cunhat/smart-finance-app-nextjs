import React from "react";
import { WidgetContainer } from "./styles";

type WidgetProps = {
  children?: React.ReactNode;
};

export function Widget(props: WidgetProps) {
  return <WidgetContainer>{props.children}</WidgetContainer>;
}
