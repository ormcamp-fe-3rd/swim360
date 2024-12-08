import { goToLinkClick, goToLinkKeyboard } from "@/utils/goToLink";

interface Props {
  imgUrl: string;
  name: string;
  url: string;
}

export default function MainIconButton({ imgUrl, name, url }: Props) {
  return (
    <button>
      <img
        className="h-8 w-8"
        src={imgUrl}
        alt={name}
        role="link"
        tabIndex={0}
        onClick={()=> goToLinkClick(url)}
        onKeyDown={(event)=> goToLinkKeyboard(event, url)}
      />
    </button>
  );
}
