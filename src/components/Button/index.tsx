import IconAdd from '@/icons/IconAdd';
import IconCart from '@/icons/IconCart';
import IconDecrement from '@/icons/IconDecrement';
import IconRemove from '@/icons/IconRemove';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type ButtonParams = {
  label?: string;
  className?: string;
  icon?: 'cart' | 'decrement' | 'add' | 'remove' | '';
  variant?: 'primary' | 'card' | 'product' | 'ghost' | '';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconMap = {
  cart: <IconCart />,
  add: <IconAdd />,
  decrement: <IconDecrement />,
  remove: <IconRemove />,
};

export default function Button({
  children,
  label,
  className,
  icon,
  variant = 'primary',
  ...buttonProps
}: ButtonParams) {
  const name = variant ? styles[variant] : styles['default'];

  return (
    <button
      aria-label={label}
      className={`${className ?? ''} ${name} ${styles['default']}`}
      {...buttonProps}
    >
      {icon && iconMap[icon]}
      {children}
    </button>
  );
}
