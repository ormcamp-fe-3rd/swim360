import { Button } from "../ui/button";

interface PrimaryButtonProps {
  children: React.ReactNode,
  className?: string
}

function PrimaryButton({ children, className }: PrimaryButtonProps) {
  return <Button className={`rounded-4 py-[22px] ${className || ""}`}>{children}</Button>;
}

export default PrimaryButton;
