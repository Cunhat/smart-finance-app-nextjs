import React from "react";
import { SidebarItemContainer, SidebarItemTitle } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideBarItemProps = {
  icon?: any;
  text: string;
  selected?: boolean;
};

export function SideBarItem(props: SideBarItemProps) {
  return (
    <SidebarItemContainer selected={props.selected}>
      <div>{props.icon}</div>
      <SidebarItemTitle selected={props.selected}>
        {props.text}
      </SidebarItemTitle>
    </SidebarItemContainer>
  );
}
