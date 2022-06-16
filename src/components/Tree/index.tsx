import React, { useState, useEffect } from 'react';
import { MainItemContainer, SecondaryItemContainer, EditActionsContainer } from './styles';
import { Text } from '../Typography';
import { faChevronRight, faPen, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BasicTextInput } from '../Inputs/BasicTextInput';

function EditableSecondaryItem({ name }: { name: string }): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);

  function handleToggleEdit():void {
    setEdit(!edit);
  }

  return (
    <SecondaryItemContainer>
      {edit ? <BasicTextInput value={name} /> : <Text text={name} fontSize='18' />}
      <EditActionsContainer>
        {edit ? (
          <>
            <FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color: 'green' }} onClick={handleToggleEdit} />
            <FontAwesomeIcon icon={faXmark} style={{ width: '20px', height: '20px', color: 'red' }} onClick={handleToggleEdit} />
          </>
        ) : (
          <FontAwesomeIcon icon={faPen} style={{ width: '15px', height: '15px' }} onClick={handleToggleEdit} />
        )}
      </EditActionsContainer>
    </SecondaryItemContainer>
  );
}

type MainItemProps = {
  data: any;
};

function MainItem(props: MainItemProps): JSX.Element  {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  function handleToggle():void {
    setOpen(!open);
  }

  function handleToggleEdit(): void {
    setEdit(!edit);
  }

  function checkIfHasSubItems():boolean {
    return props.data.subCategories.length > 0;
  }

  return (
    <>
      <MainItemContainer>
        {checkIfHasSubItems() && (
          <FontAwesomeIcon
            rotation={open ? 90 : undefined}
            icon={faChevronRight}
            style={{ width: '12px', height: '12px' }}
            onClick={handleToggle}
          />
        )}
        {edit ? <BasicTextInput value={props.data.name} /> : <Text text={props.data.name} fontSize='18' />}
        <EditActionsContainer>
          {edit ? (
            <>
              <FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color: 'green' }} onClick={handleToggleEdit} />
              <FontAwesomeIcon icon={faXmark} style={{ width: '20px', height: '20px', color: 'red' }} onClick={handleToggleEdit} />
            </>
          ) : (
            <FontAwesomeIcon icon={faPen} style={{ width: '15px', height: '15px' }} onClick={handleToggleEdit} />
          )}
        </EditActionsContainer>
      </MainItemContainer>
      {open &&
        checkIfHasSubItems() &&
        props.data.subCategories.map((subItem, index: number) => (
          <EditableSecondaryItem name={subItem.name} key={subItem.name + index} />
        ))}
    </>
  );
}

export function Tree({ data }): JSX.Element  {
  return (
    <>
      {data.map((elem) => {
        return <MainItem data={elem} key={elem.name} />;
      })}
    </>
  );
}
