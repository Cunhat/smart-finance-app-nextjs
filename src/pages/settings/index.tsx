import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/Typography';
import {
  SettingsPageContainer,
  SettingsPageContentContainerRouting,
  SettingsPageContentContainerInfo,
  SettingsPageContentContainer,
} from '../../styles/Settings';
import { SettingsItem } from '../../components/SettingsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';


type SettingsRoute = {
  title: string;
  route: string;
  id: string;
  icon: JSX.Element;
};

const settingsRoutes: Array<SettingsRoute> = [
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faBuildingColumns} />,
    title: 'Accounts',
    route: '/settings/accounts',
    id: 'accounts',
  },
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faBuildingColumns} />,
    title: 'Categories & Tags',
    route: '/settings/categories&tags',
    id: 'categoriesTags',
  },
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faBuildingColumns} />,
    title: 'Accounts',
    route: '/settings/accounts',
    id: 'accounts',
  },
  {
    icon: <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faBuildingColumns} />,
    title: 'Accounts',
    route: '/settings/accounts',
    id: 'accounts',
  },
];

function Settings() {
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
          <SettingsPageContentContainerInfo></SettingsPageContentContainerInfo>
        </SettingsPageContentContainer>
      </SettingsPageContainer>
    </PageLayout>
  );
}

export default Settings;
