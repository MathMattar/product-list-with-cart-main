'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import Button from '../Button';
import { useCart } from '@/utils/hook/useCart';

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
                alt={`Image of the delicious dish ${title}`}
                style={{
                  objectFit: 'cover',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0',
                  borderRadius: '8px',
                }}
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
