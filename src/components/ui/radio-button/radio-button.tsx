import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  isDisabled?: boolean
  variant?: 'off' | 'on'
} & ComponentPropsWithoutRef<T>

import s from './radio-button.module.scss'

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'select',
    ...rest
  } = props

  return (
    <Component className={`${s.radioButton} ${s[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  )
}
