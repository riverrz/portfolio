import { cn } from "@/app/utils/cn";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  return <div className={cn("rounded shadow-2xl	", className)}>{children}</div>;
};
