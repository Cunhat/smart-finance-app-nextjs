import React from "react";
import { PageLyoutContainer, PageMainContainer } from "./styles";
import { SideBar } from "../SideBar";

type PageLayoutProps = {
  children?: React.ReactNode;
};

export function PageLayout(props: PageLayoutProps) {
  return (
    <PageLyoutContainer>
      <SideBar></SideBar>
      <PageMainContainer>{props.children}</PageMainContainer>
    </PageLyoutContainer>
  );
}
