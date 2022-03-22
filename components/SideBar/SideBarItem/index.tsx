import React from "react";
import { SidebarItemContainer, SidebarItemTitle } from "./styles";

type SideBarItemProps = {
  text: string;
  selected?: boolean;
};

export function SideBarItem(props: SideBarItemProps) {
  return (
    <SidebarItemContainer selected={props.selected}>
      <SidebarItemTitle selected={props.selected}>
        {props.text}
      </SidebarItemTitle>
    </SidebarItemContainer>
  );
}
