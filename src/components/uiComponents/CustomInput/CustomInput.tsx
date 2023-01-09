import React from "react";
import "./CustomInput.css";

interface CustomInputInterface {
  value?: string;
  style?: object;
  type?: string;
  onChange: (text: string) => void;
  placeholder?: string;
  labelName?: string;
  notNull?: boolean;
  className?: string;
}

const CustomInput: React.FC<CustomInputInterface> = ({
  value,
  style,
  type = "text",
  onChange,
  placeholder,
  labelName,
  notNull = false,
  className = "",
}) => {
  return (
    
      <input
        placeholder={placeholder}
        style={style}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className={`InputField TextStyle ${className}`}
      />
  );
};

export default CustomInput;
