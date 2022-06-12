import React from 'react';
import { SettingsItemContainer } from './styles';
import { Text } from '../../components/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

type SettingsItemProps = {
  icon: any;
  title: string;
  route: string;
};

export function SettingsItem(props: SettingsItemProps): JSX.Element {
  const { pathname } = useRouter();
  
  return (
    <Link href={props.route}>
      <SettingsItemContainer isActive={pathname === props.route}>
        {props.icon}
        <Text fontSize='18px' color='#333' text={props.title} />
      </SettingsItemContainer>
    </Link>
  );
}
