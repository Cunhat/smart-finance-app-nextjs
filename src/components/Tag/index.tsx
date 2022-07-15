import React, { useState } from 'react';
import { TagContainer, DeleteIconContainer } from './styles';
import { Text } from '../Typography';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TagProps = {
  tagName: string;
  tagId: string;
  canBeDeleted?: boolean;
  canBeEdited?: boolean;
  deleteHandler: (id: string) => void;
};

export const Tag: React.FC<TagProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <TagContainer onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <Text text={props.tagName} fontSize='14px' color='#333' />
      {props.canBeDeleted && show && (
        <DeleteIconContainer>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ width: '20px', height: '20px', color: '#999' }}
            onClick={() => props.deleteHandler(props.tagId)}
          />
        </DeleteIconContainer>
      )}
    </TagContainer>
  );
};
