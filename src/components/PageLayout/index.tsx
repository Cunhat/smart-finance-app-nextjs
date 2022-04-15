import React from "react";
import { PageLayoutContainer, PageMainContainer } from "./styles";
import { SideBar } from "../SideBar";
import { ISideBarItem } from "../../models/Interfaces";
import {
  faAddressCard,
  faChartPie,
  faGear,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const data: Array<ISideBarItem> = [
  {
    title: "Dashboard",
    path: "/",
    selected: true,
    icon: faAddressCard,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: faMoneyBillTransfer,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: faChartPie,
  },
  {
    title: "Settings",
    path: "/settings",
    bottom: true,
    icon: faGear,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: faAddressCard,
  },
];

export function PageLayout(props: PageLayoutProps) {
  return (
    <PageLayoutContainer>
      <SideBar data={data}></SideBar>
      <PageMainContainer>{props.children}</PageMainContainer>
    </PageLayoutContainer>
  );
}
