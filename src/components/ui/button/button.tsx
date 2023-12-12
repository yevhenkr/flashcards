import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  isDisabled?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

import s from './button.module.scss'

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
