import React, { useState, useEffect } from 'react';

import { SettingsPageLayout } from '../../components/SettingsPageLayout';
import { LinearContainer } from '@/components/Containers';
import { Button } from '@/components/Buttons';
import { TitleSection } from '@/styles/Settings';
import { TextIcon, Text } from '@/components/Typography';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { Icon } from '@/components/Icon';
import { trpc } from '@/utils/trpc';

function Accounts() {
  const accounts = trpc.useQuery(['getAccounts'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <SettingsPageLayout>
      <TitleSection>
        <TextIcon icon={faCreditCard} fontSize='20px' color='#333' text='Accounts' />
        <Button onClick={() => {}} title='Account' leftIcon={faPlus} />
      </TitleSection>
      <LinearContainer>
        {accounts.isSuccess &&
          accounts.data.length > 0 &&
          accounts.data.map((account) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#ebeff2',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: "5px"
                }}
              >
                <Text text={account.name} fontSize='16px' />
                <Text text={account.type} fontSize='16px' color="#999" />
              </div>
              <Icon icon={faEllipsisVertical} iconSize='20px' />
            </div>
          ))}
      </LinearContainer>
    </SettingsPageLayout>
  );
}

export default Accounts;
