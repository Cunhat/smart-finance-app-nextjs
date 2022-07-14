import React, { useState, useEffect } from 'react';
import { MainItemContainer, SecondaryItemContainer, EditActionsContainer } from './styles';
import { Text } from '../Typography';
import { faChevronRight, faPen, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { IMainItem, ISecondaryItem } from '../../models/TreeInterfaces/interfaces';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

type EditableSectionProps = {
  canEdit: boolean;
  handleToggleConfirmEdition: () => void;
  handleToggleCancelEdition: () => void;
  handleToggleEdition: () => void;
  isPrimary?: boolean;
  handlePrimaryCreation: (value: string) => void;
};

const EditableSection: React.FC<EditableSectionProps> = (props) => {
  return (
    <EditActionsContainer>
      {props.canEdit ? (
        <>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ width: '20px', height: '20px', color: 'green' }}
            onClick={props.handleToggleConfirmEdition}
          />
          <FontAwesomeIcon
            icon={faXmark}
            style={{ width: '20px', height: '20px', color: 'red' }}
            onClick={props.handleToggleCancelEdition}
          />
        </>
      ) : (
        <>
          {props.isPrimary && <Icon icon={faPlus} onClick={props.handlePrimaryCreation} color='#333' iconSize='20px' />}
          <Icon icon={faPen} iconSize='15px' onClick={props.handleToggleEdition} />
        </>
      )}
    </EditActionsContainer>
  );
};

type EditableSecondaryItemProps = ISecondaryItem;

function EditableSecondaryItem(props: EditableSecondaryItemProps): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(props.name);

  function handleToggleEdit(): void {
    setEdit(!edit);
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  function confirmHandler() {
    props.editableHandler(props.id, name);
    setEdit(false);
  }

  return (
    <SecondaryItemContainer>
      {edit ? <BasicTextInput value={name} onChange={changeHandler} /> : <Text text={props.name} fontSize='18' />}
      {props.editable && (
        <EditableSection
          canEdit={edit}
          handleToggleConfirmEdition={confirmHandler}
          handleToggleCancelEdition={confirmHandler}
          handleToggleEdition={handleToggleEdit}
        />
      )}
    </SecondaryItemContainer>
  );
}

type MainItemProps = {
  data: IMainItem;
};

function MainItem(props: MainItemProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(props.data.name);

  function handleToggle(): void {
    setOpen(!open);
  }

  function handleToggleEdit(): void {
    setEdit(!edit);
  }

  function checkIfHasSubItems(): boolean {
    return props?.data?.secondaryItems?.length > 0;
  }

  function confirmHandler() {
    props.data.editableHandler(props.data.id, name);
    setEdit(false);
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

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
        {edit ? <BasicTextInput value={name} onChange={changeHandler} /> : <Text text={props.data.name} fontSize='18' />}
        {props.data.editable && (
          <EditableSection
            canEdit={edit}
            handleToggleConfirmEdition={confirmHandler}
            handleToggleCancelEdition={confirmHandler}
            handleToggleEdition={handleToggleEdit}
            handlePrimaryCreation={() => props.data.handlePrimaryCreation(props.data.id, props.data.name)}
            isPrimary
          />
        )}
      </MainItemContainer>
      {open && checkIfHasSubItems() && props.data.secondaryItems.map((subItem, index: number) => <EditableSecondaryItem {...subItem} />)}
    </>
  );
}

type TreeProps = {
  data: Array<IMainItem>;
};

export function Tree({ data }: TreeProps): JSX.Element {
  return (
    <>
      {data.map((elem) => {
        return <MainItem data={elem} key={elem.name} />;
      })}
    </>
  );
}
