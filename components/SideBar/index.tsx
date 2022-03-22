import React from "react";
import { SidebarContainer } from "./styles";
import { SideBarItem } from "./SideBarItem";
type SideBarProps = {
  children?: React.ReactNode;
};

export function SideBar(props: SideBarProps) {
  return (
    <SidebarContainer>
      <ul>
        <SideBarItem selected text="Teste" />
        <SideBarItem text="Teste" />
        <SideBarItem text="Teste" />
        <SideBarItem text="Teste" />
      </ul>
    </SidebarContainer>
  );
}
