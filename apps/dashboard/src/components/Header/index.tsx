import useRoutesStore from "../../hooks/stores/useRoutesStore";
import Icon from "../Icon";
import { header, iconStyles, title as titleStyle, wrapper } from "./styles.css";

function Header() {
  const {
    utils: { getActiveRoute },
  } = useRoutesStore();

  const activeRoute = getActiveRoute();

  if (!activeRoute) {
    return null;
  }

  const { icon, title, description } = activeRoute;

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
