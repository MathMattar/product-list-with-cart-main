'use client';

import { useCart } from '@/utils/context/useCart';
import classNames from 'classnames';
import Image from 'next/image';
import { memo } from 'react';
import Button from '../Button';
import styles from './styles.module.scss';

interface CardParams {
  image: string;
  title: string;
  subtitle: string;
  value: number;
}

interface CardProps {
  content: CardParams[];
}

const Cards = memo(({ content }: CardProps) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <section className={styles['card__wrapper']}>
      {content?.map(({ image, title, subtitle, value }: CardParams, index) => {
        const product = cartItems.reduce(
          (acc, item) => (item.title === title ? acc + item.quantity : acc),
          0
        );

        const imageBorder = classNames(styles['image'], {
          [styles['image--border']]: product >= 1,
        });

        return (
          <div key={index} className={styles['card__container']}>
            <div className={styles['card__image-wrapper']}>
              <div className={styles['image-container']}>
                <Image
                  src={image}
                  fill
                  quality={100}
                  priority
                  alt={`Image of the delicious dish ${title}`}
                  className={imageBorder}
                />

                {product === 0 ? (
                  <Button
                    variant="card"
                    label="Add to Cart"
                    icon="cart"
                    className={styles['card__button']}
                    onClick={() => addToCart({ image, title, subtitle, value })}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <div className={styles['card__button-container']}>
                    <Button
                      variant="ghost"
                      icon="decrement"
                      onClick={() => removeFromCart(title)}
                      className={styles['button']}
                    />

                    <p>{product}</p>

                    <Button
                      variant="ghost"
                      icon="add"
                      onClick={() =>
                        addToCart({ image, title, subtitle, value })
                      }
                      className={styles['button']}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={styles['card__text']}>
              <h3>{subtitle}</h3>
              <h1>{title}</h1>
              <h2>${value.toFixed(2)}</h2>
            </div>
          </div>
        );
      })}
    </section>
  );
});

export default Cards;
