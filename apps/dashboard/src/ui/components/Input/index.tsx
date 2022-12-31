import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import { IconTypes } from "../Icon";
import Presentation from "./Presentation";

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

  const showEyeIcon = type === "password";
  const eyeIconName: IconTypes = hidePassword ? "eye" : "eye-hidden";
  const inputType =
    type === "password" ? (hidePassword ? "password" : "text") : type;

  return (
    <Presentation
      className={className}
      error={error}
      eyeIconName={eyeIconName}
      label={label}
      message={message}
      name={name}
      placeholder={placeholder}
      showEyeIcon={showEyeIcon}
      type={inputType}
      onEyeClick={onEyeClick}
      {...props}
    />
  );
}

export default Input;
