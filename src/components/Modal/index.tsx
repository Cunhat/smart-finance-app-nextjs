import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { ModalContainer, Overlay } from './styles';

type ModalProps = {
  open: boolean;
  id: string;
};

export const Modal: React.FC<ModalProps> = ({ children, open, onClose, id }) => {
  const [mount, setMount] = useState<boolean>(false);
  
  const modalContent = open ? (
    <>
      <Overlay />
      <ModalContainer>
        {children}
      </ModalContainer>
    </>
  ) : null;

  React.useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return mount ? ReactDom.createPortal(modalContent, document.querySelector('#portal')) : null;
};
