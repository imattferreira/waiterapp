import { InputHTMLAttributes } from "react";
import Icon from "../Icon";
import {
  iconError,
  inputVariants,
  inputWrapperVariants,
  labelText,
  messageVariants,
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
  ...props
}: InputProps) {
  return (
    <div>
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
        {/* {type === 'password' && } */}
      </div>
      {message && (
        <>
          {/* {error && <Icon name="warning" className={iconError} />} */}
          <span
            className={error ? messageVariants.error : messageVariants.default}
          >
            {message}
          </span>
        </>
      )}
    </div>
  );
}

export default Input;
