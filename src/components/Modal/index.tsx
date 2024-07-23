'use client';

import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  useEffect(() => {
    function closeModalOnTypeEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', closeModalOnTypeEsc);
    return () => {
      window.removeEventListener('keydown', closeModalOnTypeEsc);
    };
  }, []);

  if (typeof document == 'undefined' || !isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles['modal__overlay']} onClick={closeModal}>
      <section
        className={styles['modal__wrapper']}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};
