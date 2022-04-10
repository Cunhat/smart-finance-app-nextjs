import React from "react";
import { SidebarItemContainer, SidebarItemTitle } from "../styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideBarItemProps = {
  icon?: any;
  text: string;
  selected?: boolean;
  path: string;
  bottom?: boolean;
};

export function SideBarItem(props: SideBarItemProps) {
  return (
    <Link href={props.path} passHref>
      <SidebarItemContainer selected={props.selected} bottom={props.bottom}>
        {props.icon}
        <SidebarItemTitle selected={props.selected}>
          {props.text}
        </SidebarItemTitle>
      </SidebarItemContainer>
    </Link>
  );
}
