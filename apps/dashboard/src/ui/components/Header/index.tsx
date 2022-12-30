import useRoutesStore from "../../../app/hooks/stores/useRoutesStore";
import Icon from "../Icon";
import { container, ico, titleText, titleWrapper } from "./styles.css";

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
    <header className={container}>
      <div className={titleWrapper}>
        <Icon name={icon} size={24} className={ico} />
        <h2 className={titleText}>{title}</h2>
      </div>
      <p>{description}</p>
    </header>
  );
}

export default Header;
