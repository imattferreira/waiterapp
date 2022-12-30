import { ButtonHTMLAttributes, ReactNode } from "react";
import { containerVariants } from "./styles.css";

type ButtonTypes = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonTypes;
  children: ReactNode;
  disabled?: boolean;
};

function Button({
  variant = "primary",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        disabled ? containerVariants.disabled : containerVariants[variant]
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
