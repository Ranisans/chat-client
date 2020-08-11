import React from "react";

import "./InputBlock.scss";

export interface IBProps {
  className: string;
  label: string;
  value: string;
  placeholder: string;
  isPassword?: boolean;
  callback: (value: string) => void;
}

const InputBlock: React.FC<IBProps> = ({
  className,
  label,
  value,
  placeholder,
  isPassword,
  callback,
}: IBProps) => (
  <div className={`input_block ${className}`}>
    <label className="input_block-label">{label}</label>
    <input
      type={isPassword ? "password" : "text"}
      value={value}
      placeholder={placeholder}
      className="input_block-input"
      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        callback(e.currentTarget.value);
      }}
      required
    />
  </div>
);

export default InputBlock;
