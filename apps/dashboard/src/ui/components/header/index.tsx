import useRoutesStore from "../../../app/hooks/stores/use-router-store";
import Presentation from "./presentation";

function Header() {
  const {
    utils: { getActiveRoute },
  } = useRoutesStore();

  const activeRoute = getActiveRoute();

  if (!activeRoute) {
    return null;
  }

  const { icon, title, description } = activeRoute;

  return <Presentation description={description} icon={icon} title={title} />;
}

export default Header;
