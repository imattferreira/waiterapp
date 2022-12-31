import { lazy, Suspense } from "react";

const ICONS = {
  "eye-hidden": lazy(() => import("./Icons/EyeHidden")),
  eye: lazy(() => import("./Icons/Eye")),
  home: lazy(() => import("./Icons/Home")),
  "log-off": lazy(() => import("./Icons/LogOff")),
  menu: lazy(() => import("./Icons/Menu")),
  order: lazy(() => import("./Icons/Order")),
  profile: lazy(() => import("./Icons/Profile")),
  users: lazy(() => import("./Icons/Users")),
  warning: lazy(() => import("./Icons/Warning")),
};

export type IconTypes = keyof typeof ICONS;

type IconProps = {
  name: IconTypes;
  size?: number;
  className?: string;
};

function Icon({ name, size, ...props }: IconProps) {
  const Component = ICONS[name];

  return Component ? (
    <Suspense>
      <Component size={size} {...props} />
    </Suspense>
  ) : null;
}

export default Icon;
