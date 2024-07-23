'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';

type ModalContextType = {
  opened: '' | 'confirmed';
  open: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType>({
  close: () => null,
  open: () => null,
  opened: '',
});

export function ModalProvider({ children }: PropsWithChildren) {
  const [opened, setopened] = useState<ModalContextType['opened']>('');

  function open() {
    setopened('confirmed');
  }

  function close() {
    setopened('');
  }

  return (
    <ModalContext.Provider
      value={{
        close,
        opened,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
