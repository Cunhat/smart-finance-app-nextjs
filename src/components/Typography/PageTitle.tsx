import React from 'react';
import { PageTitleText } from './styles';

type PageTitleProps = {
  title: string;
};

export function PageTitle({ title }: PageTitleProps): JSX.Element {
  return <PageTitleText>{title}</PageTitleText>;
}
