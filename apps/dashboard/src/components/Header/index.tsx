import Icon, { IconTypes } from "../Icon";
import { header, iconStyles, title as titleStyle, wrapper } from "./styles.css";

type HeaderProps = {
  title: string;
  icon: IconTypes;
  description: string;
};

function Header({ description, icon, title }: HeaderProps) {
  return (
    <header className={header}>
      <div className={wrapper}>
        <Icon name={icon} size={24} className={iconStyles} />
        <h2 className={titleStyle}>{title}</h2>
      </div>
      <p>{description}</p>
    </header>
  );
}

export default Header;
