'use client';

import IconEmptyCart from '@/icons/IconEmptyCart';
import { useCart } from '@/utils/hook/useCart';
import Button from '../Button';
import styles from './styles.module.scss';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const isEmpty = cartItems.length === 0;

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.value * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <section className={styles['cart-wrapper']}>
      <h1 className={styles['cart-title']}>Your Cart ({cartItems.length})</h1>
      {isEmpty ? (
        <div className={styles['cart-empty']}>
          <IconEmptyCart />
          <p className={styles['cart-empty-content']}>
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className={styles['cart-container']}>
          <ul className={styles['cart-list']}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles['cart-item']}>
                <div className={styles['item-info']}>
                  <h2 className={styles['item-title']}>{item.title}</h2>
                  <div className={styles['item-price']}>
                    <p className={styles['item-quantily']}>{item.quantity}x</p>
                    <p className={styles['item-value']}>
                      @${item.value.toFixed(2)}
                    </p>
                    <p className={styles['item-total-value']}>
                      ${(item.value * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <Button
                  leftIcon="remove"
                  variant="ghost"
                  className={styles['item-remove']}
                  onClick={() => {
                    removeFromCart(item.title);
                    console.log('clicou');
                  }}
                />
              </li>
            ))}
          </ul>
          <div className={styles['cart-total']}>
            <h3 className={styles['total-order']}>Order Total</h3>
            <p className={styles['total']}>${calculateTotal()}</p>
          </div>
        </div>
      )}
      {!isEmpty ? (
        <div className={styles['cart-cta']}>
          <div>
            <p className={styles['cta-content']}>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <Button
            variant="primary"
            label="button to confirm the purchase order"
            className={styles['cart-button']}
          >
            Confirm Order
          </Button>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}
