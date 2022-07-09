import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { CommonButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ComponentType<IconBaseProps>;
  width: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  width,
  ...rest
}) => {
  return (
    <CommonButton {...rest} width={width} type="button">
      {text} {Icon && <Icon size={20} />}
    </CommonButton>
  );
};

export default Button;
