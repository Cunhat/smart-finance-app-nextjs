import React from 'react';
import { SettingsItemContainer } from './styles';
import { Text } from '../../components/Typography';

type SettingsItemProps = {
  icon: any;
  title: string;
  route: string;
};

export function SettingsItem(props: SettingsItemProps): JSX.Element {
  return (
    <SettingsItemContainer onClick={() => {}}>
      {props.icon}
      <Text fontSize='18px' color="#333" text={props.title} />
    </SettingsItemContainer>
  );
}
