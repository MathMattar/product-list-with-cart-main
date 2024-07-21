import { CartProvider } from '@/utils/hook/useCart';
import styles from './styles.module.scss';
import Card from '@/components/Card';
import Cart from '@/components/Cart';
import { cardContent } from '@/constants/_card';

export default function Desserts() {
  return (
    <CartProvider>
      <section className={styles['desserts-wrapper']}>
        <h1 className={styles['dessets-title']}>Desserts</h1>
        <Card content={cardContent} />
        <Cart />
      </section>
    </CartProvider>
  );
}
