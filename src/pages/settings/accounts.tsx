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
import { AccountContainer, AccountInnerContainer } from '@/styles/Settings';
import { CreateAccount } from '@/components/CreateAccount';

function Accounts() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const accounts = trpc.useQuery(['getAccounts'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <SettingsPageLayout>
      <CreateAccount isOpen={modalOpen} openModal={setModalOpen} />
      <TitleSection>
        <TextIcon icon={faCreditCard} fontSize='20px' color='#333' text='Accounts' />
        <Button onClick={() => setModalOpen(!modalOpen)} title='Account' leftIcon={faPlus} />
      </TitleSection>
      <LinearContainer>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        {accounts.isSuccess &&
          accounts.data.length > 0 &&
          accounts.data.map((account) => (
            <AccountContainer>
              <AccountInnerContainer>
                <Text text={account.name} fontSize='16px' />
                <Text text={account.type} fontSize='16px' color='#999' />
              </AccountInnerContainer>
              <Icon icon={faEllipsisVertical} iconSize='20px' />
            </AccountContainer>
          ))}
          </div>
      </LinearContainer>
    </SettingsPageLayout>
  );
}

export default Accounts;
