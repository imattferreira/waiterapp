import Icon, { IconTypes } from "@/ui/components/icon";

import { container, ico, titleText, titleWrapper } from "./styles.css";

type PresentationProps = {
  icon: IconTypes;
  title: string;
  description?: string;
};

function Presentation({ description, icon, title }: PresentationProps) {
  return (
    <header className={container}>
      <div className={titleWrapper}>
        <Icon name={icon} size={24} className={ico} />
        <h2 className={titleText}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </header>
  );
}

export default Presentation;
