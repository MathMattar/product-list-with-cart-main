import IconAdd from '@/icons/IconAdd';
import IconDecrement from '@/icons/IconDecrement';
import IconRemove from '@/icons/IconRemove';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type ButtonParams = {
  label?: string;
  className?: string;
  rightIcon?: 'emptyCart' | 'decrement' | 'add';
  leftIcon?: 'emptyCart' | 'decrement' | 'add' | 'remove';
  variant?: 'primary' | 'card' | 'product' | 'ghost';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconMap = {
  emptyCart: <IconAdd />,
  decrement: <IconDecrement />,
  remove: <IconRemove />,
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
