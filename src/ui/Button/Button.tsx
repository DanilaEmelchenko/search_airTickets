import { ComponentPropsWithRef, FunctionComponent } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: string;
}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
