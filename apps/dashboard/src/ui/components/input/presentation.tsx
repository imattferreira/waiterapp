import { InputHTMLAttributes, Suspense } from "react";
import Icon, { IconTypes } from "../icon";
import {
  eyeButton,
  iconError,
  inputVariants,
  inputWrapperVariants,
  labelText,
  messageWrapperVariants,
} from "./styles.css";

type PresentationProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  eyeIconName: IconTypes;
  label: string;
  message?: string;
  name?: string;
  placeholder: string;
  showEyeIcon: boolean;
  onEyeClick: () => void;
};

function Presentation({
  className,
  error,
  eyeIconName,
  label,
  message,
  name,
  placeholder,
  showEyeIcon,
  type,
  onEyeClick,
  ...props
}: PresentationProps) {
  return (
    <div className={className}>
      <label className={labelText} htmlFor={name}>
        {label}
      </label>
      <div
        className={
          error ? inputWrapperVariants.error : inputWrapperVariants.default
        }
      >
        <input
          className={error ? inputVariants.error : inputVariants.default}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {showEyeIcon && (
          <button type="button" className={eyeButton} onClick={onEyeClick}>
            <Suspense>
              <Icon name={eyeIconName} />
            </Suspense>
          </button>
        )}
      </div>
      {message && (
        <div
          className={
            error
              ? messageWrapperVariants.error
              : messageWrapperVariants.default
          }
        >
          {error && (
            <Suspense>
              <Icon name="warning" className={iconError} />
            </Suspense>
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}

export default Presentation;
