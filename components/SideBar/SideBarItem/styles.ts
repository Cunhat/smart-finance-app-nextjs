import styled from "styled-components";

type SidebarItemProps = {
  selected?: boolean;
};

export const SidebarItemContainer = styled.li<SidebarItemProps>`
  background-color: ${(props) => (props.selected ? "#edf1f8" : "#FFF")};
  height: 65px;
  display: flex;
  align-items: center;
  border-left: ${(props) => (props.selected ? "solid 5px #3c76f1" : "")};
  padding-left: ${(props) => (props.selected ? "35px" : "40px")};
  :hover {
    cursor: pointer;
    background-color: #edf1f8;
    p {
      color: #3c76f1;
    }
  }
`;

export const SidebarItemTitle = styled.p<SidebarItemProps>`
  color: ${(props) => (props.selected ? "#3c76f1" : "#969696")};
`;
