import React from "react";
import { SidebarContainer } from "./styles";
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
      <ul>
        <SideBarItem
          selected
          text="Dashboard"
          icon={
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px" }}
              icon={faSquarePollVertical}
            />
          }
        />
        <SideBarItem
          text="Transactions"
          icon={
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px" }}
              icon={faSquarePollVertical}
            />
          }
        />
        <SideBarItem
          text="Settings"
          icon={
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px" }}
              icon={faSquarePollVertical}
            />
          }
        />
      </ul>
    </SidebarContainer>
  );
}
