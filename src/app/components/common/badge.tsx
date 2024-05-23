import { cn } from "@/app/utils/cn";
import React from "react";

interface Props {
  className?: string;
}

export const Badge = ({ className }: Props) => {
  return <div className={cn("h-4 w-4 bg-primary", className)} />;
};
