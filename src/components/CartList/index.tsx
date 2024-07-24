'use client';

import { useCart } from '@/utils/context/useCart';
import Image from 'next/image';
import Button from '../Button';
import styles from './styles.module.scss';

export default function CartList({ isModal }: { isModal?: boolean }) {
  const { cartItems, removeFromCart, calculateTotal } = useCart();

  const modalLayout = isModal ? styles['--modal'] : '';

  return (
    <section className={styles['cart__container']}>
      <ul className={`${styles['cart__list']} ${modalLayout}`}>
        {cartItems.map((item, index) => (
          <li key={index} className={`${styles['cart__item']} ${modalLayout}`}>
            <div className={`${styles['item__info']} ${modalLayout}`}>
              <h2 className={`${styles['item__title']} ${modalLayout}`}>
                {item.title}
              </h2>

              <p className={`${styles['item__quantity']} ${modalLayout}`}>
                {item.quantity}x
              </p>

              <p className={`${styles['item__value']} ${modalLayout}`}>
                @${item.value.toFixed(2)}
              </p>

              <p className={`${styles['item__total-value']} ${modalLayout}`}>
                ${(item.value * item.quantity).toFixed(2)}
              </p>
            </div>

            {!isModal ? (
              <Button
                icon="remove"
                variant="ghost"
                className={styles['item__remove']}
                onClick={() => {
                  removeFromCart(item.title);
                }}
              />
            ) : (
              <div className={styles['cart__image-wrapper']}>
                <div className={styles['image__container']}>
                  <Image
                    src={item.image}
                    alt=""
                    width={48}
                    height={48}
                    className={styles['image']}
                  />
                </div>
              </div>
            )}
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
