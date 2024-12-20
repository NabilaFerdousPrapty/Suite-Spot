import React from "react";

// Define props interface for the Button
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  outline = false,
  small = false,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        px-4
        w-full
        ${outline ? "bg-white" : "bg-blue-500"}
        ${outline ? "border-black" : "border-blue-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute left-4 top-3"
        />
      )}
      {label}
    </button>
  );
};

export default Button;
