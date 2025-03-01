import clsx, { ClassValue } from "clsx";

import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classes?: ClassValue | ClassValue[];
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      type="text"
      placeholder="Enter text"
      className={clsx("input", className, props.classes)}
      {...props}
    />
  );
}
