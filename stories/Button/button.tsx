import { ButtonDefault } from "./variants/default";
import { ButtonOutline } from "./variants/outline";
import { ButtonWithIcon } from "./variants/with-icon";
import { ButtonWithIconOutline } from "./variants/with-icon-outline";
import { ButtonGradientBorder } from "./variants/gradient-border";
import { ButtonPill } from "./variants/pill";
import { ButtonOutlinePill } from "./variants/outline-pill";
import { ButtonWithIconPill } from "./variants/with-icon-pill";
import { ButtonWithIconOutlinePill } from "./variants/with-icon-outline-pill";
import { ButtonGradientBorderPill } from "./variants/gradient-border-pill";

export interface ButtonProps {
  text: string;
  link: string;
  target?: string;
  variant?: string;
}

export function Button(props: ButtonProps) {
  let Btn: React.FC<ButtonProps>;
  switch (props.variant) {
    case "Outline": {
      Btn = ButtonOutline;
      break;
    }

    case "Pill": {
      Btn = ButtonPill;
      break;
    }

    case "WithIcon": {
      Btn = ButtonWithIcon;
      break;
    }

    case "WithIconOutline": {
      Btn = ButtonWithIconOutline;
      break;
    }

    case "GradientBorder": {
      Btn = ButtonGradientBorder;
      break;
    }

    case "WithIconPill": {
      Btn = ButtonWithIconPill;
      break;
    }

    case "WithIconOutlinePill": {
      Btn = ButtonWithIconOutlinePill;
      break;
    }

    case "GradientBorderPill": {
      Btn = ButtonGradientBorderPill;
      break;
    }

    default: {
      Btn = ButtonDefault;
      break;
    }
  }

  return <Btn {...props} />;
}

export default Button;
