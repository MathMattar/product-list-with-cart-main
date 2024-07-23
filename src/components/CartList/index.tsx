'use client';

import { useCart } from '@/utils/context/useCart';
import Button from '../Button';
import styles from './styles.module.scss';

export default function CartList() {
  const { cartItems, removeFromCart, calculateTotal } = useCart();

  return (
    <section className={styles['cart__container']}>
      <ul className={styles['cart__list']}>
        {cartItems.map((item, index) => (
          <li key={index} className={styles['cart__item']}>
            <div className={styles['item__info']}>
              <h2 className={styles['item__title']}>{item.title}</h2>
              <div className={styles['item__price']}>
                <p className={styles['item__quantity']}>{item.quantity}x</p>
                <p className={styles['item__value']}>
                  @${item.value.toFixed(2)}
                </p>
                <p className={styles['item__total-value']}>
                  ${(item.value * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <Button
              icon="remove"
              variant="ghost"
              className={styles['item__remove']}
              onClick={() => {
                removeFromCart(item.title);
              }}
            />
          </li>
        ))}
      </ul>
      <div className={styles['cart__total']}>
        <h3 className={styles['total__order']}>Order Total</h3>
        <p className={styles['total']}>${calculateTotal()}</p>
      </div>
    </section>
  );
}
