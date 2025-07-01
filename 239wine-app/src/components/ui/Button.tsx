import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'primary',
  className,
  children,
  ...rest
}) => {
  const base =
    'px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = {
    primary: 'bg-terracotta text-parchment hover:bg-olive focus:ring-terracotta',
    secondary: 'bg-sand text-olive hover:bg-parchment focus:ring-olive',
  }

  return (
    <button className={clsx(base, styles[variant], className)} {...rest}>
      {children}
    </button>
  )
}

export default Button