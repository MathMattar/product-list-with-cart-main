import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import IconEmptyCart from '@/icons/IconEmptyCart';
import IconDecrement from '@/icons/IconDecrement';
import IconAdd from '@/icons/IconAdd';

type ButtonParams = {
  label?: string;
  className?: string;
  rightIcon?: 'emptyCart' | 'decrement' | 'add';
  leftIcon?: 'emptyCart' | 'decrement' | 'add';
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconMap = {
  emptyCart: <IconEmptyCart />,
  decrement: <IconDecrement />,
  add: <IconAdd />,
};

export default function Button({
  children,
  label,
  className,
  rightIcon,
  leftIcon,
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
      {leftIcon && iconMap[leftIcon]}
      {children}
      {rightIcon && iconMap[rightIcon]}
    </button>
  );
}
