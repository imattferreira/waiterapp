import { lazy } from "react";

const ICONS = {
  home: lazy(() => import("./Icons/Home")),
  "log-off": lazy(() => import("./Icons/LogOff")),
  menu: lazy(() => import("./Icons/Menu")),
  order: lazy(() => import("./Icons/Order")),
  profile: lazy(() => import("./Icons/Profile")),
  users: lazy(() => import("./Icons/Users")),
};

export type IconTypes = keyof typeof ICONS;

type IconProps = {
  name: IconTypes;
  className: string;
};

function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name];

  return Component ? <Component {...props} /> : null;
}

export default Icon;
