import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button type='button' className={cn(s.root, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
