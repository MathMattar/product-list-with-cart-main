import { useCart } from '@/utils/context/useCart';
import Button from '../Button';
import CartList from '../CartList';
import styles from './styles.module.scss';

export default function ConfirmedModal() {
  const { newOrder } = useCart();
  return (
    <section className={styles['confirmed__wrapper']}>
      <div className={styles['confirmed__header']}>
        <h1 className={styles['confirmed__title']}>Order Confirmed</h1>
        <h2 className={styles['confirmed__subtitle']}>
          We hope you enjoy your food!
        </h2>
      </div>
      <CartList isModal />
      <Button onClick={newOrder}>Start New Order</Button>
    </section>
  );
}