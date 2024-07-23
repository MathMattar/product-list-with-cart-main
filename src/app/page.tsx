import Cards from '@/components/Cards';
import Cart from '@/components/Cart';
import { cardContent } from '@/constants/_card';

export default function Home() {
  return (
    <section>
      <h1>Desserts</h1>
      <Cards content={cardContent} />
      <Cart />
    </section>
  );
}
