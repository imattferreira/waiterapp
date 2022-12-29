import Icon, { IconTypes } from "../Icon";
import { iconVariants, line, optionVariants } from "./styles.css";

type OptionProps = {
  active: boolean;
  link: string;
  icon: IconTypes;
  title: string;
}

function Option({ active, icon, link, title }: OptionProps) {
  return (
    <a
    key={link}
    href={link}
    className={
      active
        ? optionVariants.active
        : optionVariants.default
    }
  >
    <Icon
      name={icon}
      className={
        active
          ? iconVariants.active
          : iconVariants.default
      }
    />
    <span>{title}</span>
    {active && <div className={line} />}
  </a>
  )
}

export default Option;
