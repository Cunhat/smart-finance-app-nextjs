import styled from "styled-components";

type SidebarItemProps = {
  selected?: boolean;
};

export const SidebarItemContainer = styled.li<SidebarItemProps>`
  background-color: ${(props) =>
    props.selected ? "var(--primary-base-100)" : "#FFF"};
  height: 65px;
  display: flex;
  align-items: center;
  border-left: ${(props) =>
    props.selected ? `solid 5px var(--primary-base)` : ""};
  padding-left: ${(props) => (props.selected ? "35px" : "40px")};
  :hover {
    cursor: pointer;
    background-color: var(--primary-base-100);
    p {
      color: var(--primary-base);
    }
  }
`;

export const SidebarItemTitle = styled.p<SidebarItemProps>`
  color: ${(props) => (props.selected ? "#3c76f1" : "#969696")};
`;
