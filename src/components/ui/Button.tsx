import React from "react";

type ButtonVariant = "filled" | "iconed" | "text";

interface ButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  type?: "button" | "submit"
  className?: string;
  icon?: React.ReactNode; 
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  buttonProps,
  type = "button",
  className = "",
  icon,
  children,
}) => {
  const baseClasses = "rounded-md flex items-center justify-center transition-all duration-300 focus:none outline-none h-11";

  const variantClasses = {
    filled: "px-4 py-2  bg-secondaryLight hover:bg-secondary focus:outline-none border border-secondary",
    iconed: "bg-secondaryLight p-3 hover:bg-secondary focus:outline-none border border-secondary h-10",
    text: "px-4 py-2 hover:bg-secondary border border-secondary focus:outline-none",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type={type}
      {...buttonProps}
    >
      {icon && <span className={`${children ? "mr-2" : ""}`}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
