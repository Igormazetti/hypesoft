import { FC, ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import { CommonButton as Button } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ComponentType<IconBaseProps>
  width: string
}

export const CommonButton: FC<ButtonProps> = ({
  text,
  icon: Icon,
  width,
  ...rest
}) => {
  return (
    <Button {...rest} width={width} type="button">
      {text} {Icon && <Icon size={20} />}
    </Button>
  )
}
