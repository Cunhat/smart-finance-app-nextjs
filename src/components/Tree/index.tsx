import React, { useState, useEffect } from 'react';
import { MainItemContainer, SecondaryItemContainer } from './styles';
import { Text } from '../Typography';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type MainItemProps = {
  data: any;
};

function MainItem(props: MainItemProps) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <>
      <MainItemContainer onClick={handleToggle}>
        <FontAwesomeIcon rotation={open ? 90 : undefined} icon={faChevronRight} style={{ width: '12px', height: '12px' }} />
        <Text text={props.data.name} fontSize='16' />
      </MainItemContainer>
      {open && (
        <SecondaryItemContainer>
          {props.data.subCategories.map((subCategory) => (
            <Text text={subCategory.name} fontSize='16' />
          ))}
        </SecondaryItemContainer>
      )}
    </>
  );
}

export function Tree({ data }) {
  return (
    <div>
      {data.map((elem) => {
        return <MainItem data={elem} key={elem.name} />;
      })}
    </div>
  );
}
