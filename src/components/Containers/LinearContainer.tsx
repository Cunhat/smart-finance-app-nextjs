import React from 'react';
import { LinearContainerArea } from './styles';

type LinearContainerProps = {};

export const LinearContainer: React.FC<LinearContainerProps> = (props) => {
  return <LinearContainerArea>{props.children}</LinearContainerArea>;
};
