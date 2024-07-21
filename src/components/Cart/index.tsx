'use client';

import IconEmptyCart from '@/icons/IconEmptyCart';
import styles from './styles.module.scss';
import Button from '../Button';
import { useCart } from '@/utils/hook/useCart';

export default function Cart() {
  const { cartItems } = useCart();
  const isEmpty = cartItems.length === 0;

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.value * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <section className={styles['cart-wrapper']}>
      <h1>Your Cart {cartItems.length}</h1>
      {isEmpty ? (
        <div className={styles['cart-empty']}>
          <IconEmptyCart />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className={styles['cart-container']}>
          <ul className={styles['cart-list']}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles['card-item']}>
                <div>
                  <h2>{item.title}</h2>
                  <div>
                    <p>{item.quantity}x</p>
                    <p>@${item.value.toFixed(2)}</p>
                    <p>${(item.value * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles['cart-total']}>
            <h3>Order Total</h3>
            <p>${calculateTotal()}</p>
          </div>
        </div>
      )}
      <Button
        variant="primary"
        label="button to confirm the purchase order"
        className={styles['card-button']}
      >
        Confirm Order
      </Button>
    </section>
  );
}
