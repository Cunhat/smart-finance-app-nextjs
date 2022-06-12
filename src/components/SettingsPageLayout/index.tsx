import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/Typography';
import {
  SettingsPageContainer,
  SettingsPageContentContainerRouting,
  SettingsPageContentContainerInfo,
  SettingsPageContentContainer,
} from './styles';
import { SettingsItem } from '../../components/SettingsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faAddressCard, faRectangleList } from '@fortawesome/free-regular-svg-icons';

type SettingsRoute = {
  title: string;
  route: string;
  id: string;
  icon: JSX.Element;
};

const settingsRoutes: Array<SettingsRoute> = [
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faAddressCard} />,
    title: 'General',
    route: '/settings',
    id: 'general',
  },
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faRectangleList} />,
    title: 'Categories & Tags',
    route: '/settings/categoriesTags',
    id: 'categoriesTags',
  },
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faCreditCard} />,
    title: 'Accounts',
    route: '/settings/accounts',
    id: 'accounts',
  },
];

type SettingsPageLayoutProps = {
  children: React.ReactNode;
};

export function SettingsPageLayout(props: SettingsPageLayoutProps) {
  return (
    <PageLayout>
      <SettingsPageContainer>
        <PageTitle title='Settings' />
        <SettingsPageContentContainer>
          <SettingsPageContentContainerRouting>
            {settingsRoutes.map((route) => {
              return <SettingsItem key={route.id} title={route.title} route={route.route} icon={route.icon} />;
            })}
          </SettingsPageContentContainerRouting>
          <SettingsPageContentContainerInfo>{props.children}</SettingsPageContentContainerInfo>
        </SettingsPageContentContainer>
      </SettingsPageContainer>
    </PageLayout>
  );
}
