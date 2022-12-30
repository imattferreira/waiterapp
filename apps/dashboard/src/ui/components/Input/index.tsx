import type { InputHTMLAttributes } from "react";
import { Suspense, useState } from "react";
import Icon from "../Icon";
import {
  eyeButton,
  iconError,
  inputVariants,
  inputWrapperVariants,
  labelText,
  messageWrapperVariants,
} from "./styles.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
  message?: string;
  placeholder: string;
};

function Input({
  label,
  placeholder,
  name,
  message,
  error,
  type = "text",
  className,
  ...props
}: InputProps) {
  const [hidePassword, setHidePassword] = useState(type === "password");

  function onEyeClick() {
    setHidePassword((prevState) => !prevState);
  }

  const inputType =
    type === "password" ? (hidePassword ? "password" : "text") : type;

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
          type={inputType}
          id={name}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {type === "password" && (
          <button type="button" className={eyeButton} onClick={onEyeClick}>
            <Suspense>
              <Icon name={hidePassword ? "eye" : "eye-hidden"} />
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

export default Input;
