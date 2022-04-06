import React from "react";
import { SidebarItemContainer, SidebarItemTitle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideBarItemProps = {
  icon?: any;
  text: string;
  selected?: boolean;
};

export function SideBarItem(props: SideBarItemProps) {
  return (
    <SidebarItemContainer selected={props.selected}>
      <SidebarItemTitle selected={props.selected}>
        {props.icon}
        {props.text}
      </SidebarItemTitle>
    </SidebarItemContainer>
  );
}
