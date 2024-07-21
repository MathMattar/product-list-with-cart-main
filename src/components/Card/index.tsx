'use client';

import { useCart } from '@/utils/hook/useCart';
import Image from 'next/image';
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

export default function Card({ content }: CardProps) {
  const { addToCart } = useCart();

  return (
    <section className={styles['card-wrapper']}>
      {content?.map(({ image, title, subtitle, value }: CardParams, index) => (
        <div key={index} className={styles['card-container']}>
          <div className={styles['card-image-wrapper']}>
            <div className={styles['image-container']}>
              <Image
                src={image}
                fill
                quality={100}
                priority
                alt={`Image of the delicious dish ${title}`}
                className={styles['image']}
              />

              <Button
                variant="card"
                label="Add to Cart"
                leftIcon="emptyCart"
                className={styles['card-button']}
                onClick={() => addToCart({ image, title, subtitle, value })}
              >
                Add to Cart
              </Button>
            </div>
          </div>

          <div className={styles['card-text']}>
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
            <h2>${value.toFixed(2)}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}
