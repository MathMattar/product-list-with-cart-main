'use client';

import IconTree from '@/icons/IconTree';
import ImageEmptyCart from '@/icons/ImageEmptyCart';
import { useCart } from '@/utils/context/useCart';
import { useModal } from '@/utils/context/useModal';
import Button from '../Button';
import CartList from '../CartList';
import ConfirmedModal from '../ConfirmedModal';
import { Modal } from '../Modal';
import styles from './styles.module.scss';

export default function Cart() {
  const { cartItems } = useCart();
  const isEmpty = cartItems.length === 0;

  const { close, open, opened } = useModal();

  const modals = {
    '': null,
    confirmed: <ConfirmedModal />,
  };

  return (
    <section className={styles['cart__wrapper']}>
      <div className={styles['cart__content']}>
        <h1 className={styles['cart-title']}>Your Cart ({cartItems.length})</h1>
        {isEmpty ? (
          <div className={styles['cart-empty']}>
            <ImageEmptyCart />
            <p className={styles['cart-empty-content']}>
              Your added items will appear here
            </p>
          </div>
        ) : (
          <>
            <CartList />

            <div className={styles['footer__content']}>
              <div className={styles['footer__carbon']}>
                <IconTree />
                <p className={styles['footer__text']}>
                  This is a{' '}
                  <span className={styles['footer__text--highlighted']}>
                    carbon-neutral
                  </span>{' '}
                  delivery
                </p>
              </div>

              <Button
                variant="primary"
                label="button to confirm the purchase order"
                onClick={open}
                className={styles['cart__button']}
              >
                Confirm Order
              </Button>
            </div>
            <Modal isOpen={Boolean(opened)} closeModal={close}>
              {modals[opened]}
            </Modal>
          </>
        )}
      </div>
    </section>
  );
}
