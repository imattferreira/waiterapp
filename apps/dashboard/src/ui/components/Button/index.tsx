import type { ButtonHTMLAttributes, ReactNode } from "react";
import { compose } from "../../../app/lib/css";
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
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={compose(
        disabled ? containerVariants.disabled : containerVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
