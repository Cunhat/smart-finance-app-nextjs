import React from "react";
import { SidebarItemContainer, SidebarItemTitle } from "../styles";
import Link from "next/link";
import { useRouter } from "next/router";

type SideBarItemProps = {
  icon?: any;
  title: string;
  selected?: boolean;
  path: string;
  bottom?: boolean;
};

export function SideBarItem(props: SideBarItemProps) {
  const router = useRouter();
  return (
    <Link href={props.path} passHref>
      <SidebarItemContainer
        selected={router.pathname === props.path}
        bottom={props.bottom}
      >
        {props.icon}
        <SidebarItemTitle selected={props.selected}>
          {props.title}
        </SidebarItemTitle>
      </SidebarItemContainer>
    </Link>
  );
}
