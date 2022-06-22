import React from 'react';
import { TagContainer } from './styles';
import { Text } from '../Typography';

type TagProps = {
  tagName: string;
};

export const Tag: React.FC<TagProps> = (props) => {
  return (
    <TagContainer>
      <Text text={props.tagName} fontSize="14px" color="#333"/>
    </TagContainer>
  );
};
