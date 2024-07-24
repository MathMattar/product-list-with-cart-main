import Cards from '@/components/Cards';
import Cart from '@/components/Cart';
import { cardContent } from '@/constants/_card';
import styles from './styles.module.scss';

export default function HomePage() {
  return (
    <>
      <header className={styles['header']}>
        <h1>Desserts</h1>
      </header>
      <main className={styles['main']}>
        <Cards content={cardContent} />
        <Cart />
      </main>
    </>
  );
}
