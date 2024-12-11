import { Button } from "../ui/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

function PrimaryButton({ children }: PrimaryButtonProps) {
  return <Button className={"rounded-4 w-full py-[22px]"}>{children}</Button>;
}

export default PrimaryButton;
