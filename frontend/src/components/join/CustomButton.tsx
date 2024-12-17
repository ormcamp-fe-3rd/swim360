import { Button } from "../ui/button";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function CustomButton({
  children,
  onClick,
  className = "",
}: CustomButtonProps) {
  return (
    <Button
      variant="defaultCustom"
      className={`rounded-4 w-full py-[22px] ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
