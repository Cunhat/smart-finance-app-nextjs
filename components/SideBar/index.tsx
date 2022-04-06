import React from "react";
import { SidebarContainer } from "./styles";
import { SideBarItem } from "./SideBarItem";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideBarProps = {
  children?: React.ReactNode;
};

export function SideBar(props: SideBarProps) {
  return (
    <SidebarContainer>
      <ul>
        <SideBarItem
          selected
          text="Teste"
          icon={<FontAwesomeIcon icon={faAddressCard} />}
        />
        <SideBarItem text="Teste" />
        <SideBarItem text="Teste" />
        <SideBarItem text="Teste" />
      </ul>
    </SidebarContainer>
  );
}
