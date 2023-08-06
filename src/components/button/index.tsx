import clsx from "clsx";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "text";
}

export const Button: React.FC<Props> = ({
  children,
  variant = "filled",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        {
          "btn-filled": variant === "filled",
          "btn-outlined": variant === "outlined",
          "btn-text": variant === "text",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
