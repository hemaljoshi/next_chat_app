import React from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth = false,
  children,
  onClick,
  secondary = false,
  danger = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "flex justify-center py-2 px-3 shadow-sm text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        disabled && "opacity-50 cursor-not-allowed",
        fullWidth ? "w-full" : "w-auto",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
