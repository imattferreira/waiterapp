import Icon, { IconTypes } from "../Icon";
import Link from "../Link";
import { iconVariants, line, optionVariants } from "./styles.css";

type OptionProps = {
  active: boolean;
  link?: string;
  icon: IconTypes;
  title: string;
  onClick?: () => void;
};

function Option({ active, icon, link, title, onClick }: OptionProps) {
  if (!link) {
    return (
      <button
        className={active ? optionVariants.active : optionVariants.default}
      >
        <Icon
          name={icon}
          className={active ? iconVariants.active : iconVariants.default}
        />
        <span>{title}</span>
        {active && <div className={line} />}
      </button>
    );
  }

  return (
    <Link
      key={link}
      to={link}
      className={active ? optionVariants.active : optionVariants.default}
    >
      <Icon
        name={icon}
        className={active ? iconVariants.active : iconVariants.default}
      />
      <span>{title}</span>
      {active && <div className={line} />}
    </Link>
  );
}

export default Option;
