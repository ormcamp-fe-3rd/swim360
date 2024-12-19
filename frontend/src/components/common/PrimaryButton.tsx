import { Button } from "../ui/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function PrimaryButton({
  children,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Button
      variant="default"
      className={`rounded-4 w-full py-[22px] ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
