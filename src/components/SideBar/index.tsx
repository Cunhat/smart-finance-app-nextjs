import React from "react";
import { SidebarContainer, SidebarItemsContainer } from "./styles";
import { SideBarItem } from "./SideBarItem";
import {
  faAddressCard,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideBarProps = {
  children?: React.ReactNode;
};

export function SideBar(props: SideBarProps) {
  return (
    <SidebarContainer>
      <SidebarItemsContainer>
        <SideBarItem
          selected
          text="Dashboard"
          path="/dashboard"
          icon={
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px" }}
              icon={faSquarePollVertical}
            />
          }
        />
        <SideBarItem
          text="Transactions"
          path="/transactions"
          icon={
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px" }}
              icon={faSquarePollVertical}
            />
          }
        />
        <SideBarItem
          text="Settings"
          path="/settings"
          bottom
          icon={
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px" }}
              icon={faSquarePollVertical}
            />
          }
        />
      </SidebarItemsContainer>
    </SidebarContainer>
  );
}
