import { cn } from "@/app/utils/cn";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary";
}

export const Button = ({ variant, className, ...buttonProps }: Props) => {
  return (
    <button
      className={cn(
        "block no-underline py-1 px-4 md:px-6 outline-none border-2 cursor-pointer rounded-full transition-colors",
        variant === "primary" &&
          "bg-primary text-white  border-primary hover:bg-white hover:text-black",
        variant === "secondary" &&
          "bg-white text-black border-black hover:bg-primary hover:text-white hover:border-primary",
        className
      )}
      {...buttonProps}
    />
  );
};
