import { Button } from "../ui/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

function PrimaryButton({ children }: PrimaryButtonProps) {
  return <Button className={"rounded-4 py-[22px]"}>{children}</Button>;
}

export default PrimaryButton;
