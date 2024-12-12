import { Button } from "../ui/button";

interface PrimaryButtonProps {
  children: React.ReactNode,
  className?: string
}


function PrimaryButton({ children }: PrimaryButtonProps) {
  return <Button className={"rounded-4 w-full py-[22px]"}>{children}</Button>;
<<<<<<< HEAD
=======

>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d
}

export default PrimaryButton;
