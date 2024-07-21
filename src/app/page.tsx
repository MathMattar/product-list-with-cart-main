import Image from 'next/image';
import styles from './page.module.css';
import Desserts from '@/containers/Desserts/Desserts';

export default function Home() {
  return (
    <>
      <Desserts />
    </>
  );
}
