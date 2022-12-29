import { IconTypes } from "../Icon";
import Option from "./Option";
import { container, logo, w } from "./styles.css";

type Options = {
  title: string;
  link: string;
  icon: IconTypes;
};

const options = [
  {
    title: "Home",
    icon: "home",
    link: "/orders",
  },
  {
    title: "Histórico",
    icon: "order",
    link: "/orders/list",
  },
  {
    title: "Cardápio",
    icon: "menu",
    link: "/menu",
  },
  {
    title: "Usuários",
    icon: "users",
    link: "/users",
  },
  {
    title: "Meu perfil",
    icon: "profile",
    link: "/profile",
  },
  {
    title: "Sair",
    icon: "log-off",
    link: "/",
  },
] satisfies Options[];

const isOptionActive = (currPath: string, link: string) => currPath === link;

function Sidebar() {
  return (
    <aside className={container}>
      <div className={logo}>
        <span className={w}>W</span>
        <span>A</span>
      </div>
      <div>
        {options.map(({ icon, title, link }) => (
          <Option
            active={isOptionActive("/orders", link)}
            icon={icon}
            title={title}
            link={link}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
