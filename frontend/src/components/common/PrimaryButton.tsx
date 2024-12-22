import { ButtonHTMLAttributes } from "react";

import { Button } from "../ui/button";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <Button
      type="button"
      variant="default"
      className={`rounded-4 w-full py-[22px] ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
