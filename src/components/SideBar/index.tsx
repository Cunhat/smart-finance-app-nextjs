import React from "react";
import { SidebarContainer, SidebarItemsContainer } from "./styles";
import { SideBarItem } from "./SideBarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISideBarItem } from "../../models/Interfaces";

interface SideBarProps {
  data: Array<ISideBarItem>;
}

export function SideBar(props: SideBarProps) {
  return (
    <SidebarContainer>
      <SidebarItemsContainer>
        {props.data.map((item) => {
          return (
            <SideBarItem
              key={item.title}
              selected={item.selected}
              title={item.title}
              path={item.path}
              bottom={item.bottom}
              icon={
                <FontAwesomeIcon
                  style={{ width: "30px", height: "30px" }}
                  icon={item.icon}
                />
              }
            />
          );
        })}
      </SidebarItemsContainer>
    </SidebarContainer>
  );
}
