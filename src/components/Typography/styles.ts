import styled from 'styled-components';

export const PageTitleText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.pageTitle};
  color: ${(props) => props.theme.colors.text.pageTitle};
`;

type TextElementProps = {
  fontSize?: string;
  bold?: boolean;
  color?: string;
};

export const TextElement = styled.b<TextElementProps>`
  font-size: ${(props) => props.fontSize ?? props.theme.fontSizes.pageTitle};
  color: ${(props) => props.color ?? props.theme.colors.text.pageTitle};
  font-family: ${(props) => (props.bold ? 'Smart Finance Bold' : 'Smart Finance Regular')};
`;

export const TextIconContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
