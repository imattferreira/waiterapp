import { useLocation } from "react-router-dom";
import useRoutesStore from "../../../app/hooks/stores/useRoutesStore";
import Option from "./Option";
import { container, logo, w } from "./styles.css";

const isRouteActive = (currPath: string, link: string) => currPath === link;

function Sidebar() {
  const { pathname } = useLocation();
  const { routes } = useRoutesStore();

  return (
    <aside className={container}>
      <div className={logo}>
        <span className={w}>W</span>
        <span>A</span>
      </div>
      <div>
        {routes.map(({ icon, title, link, onClick }) => (
          <Option
            key={title}
            active={link ? isRouteActive(pathname, link) : false}
            icon={icon}
            title={title}
            link={link}
            onClick={onClick}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
