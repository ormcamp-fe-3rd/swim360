import { Button } from "../ui/button";

interface ConfirmButtonProps {
  text: string;
  width: string;
  font?: string;
  iconUrl?: string;
}

function ConfirmButton({ text, width, font, iconUrl }: ConfirmButtonProps) {
  return (
    <Button className={"rounded-4 px-[22px] " + "w-" + width + " " + font}>
      {iconUrl && <img className="h-6 w-6" src={iconUrl} alt={text} />}
      {text}
    </Button>
  );
}

export default ConfirmButton;
