import { createElement, ReactNode } from "react";
import { compose } from "../../../app/lib/css";
import { variants } from "./styles.css";

type Sizes =
  | "size1"
  | "size2"
  | "size3"
  | "size4"
  | "size5"
  | "size6"
  | "size7";

enum TagPerSize {
  size1 = "h1",
  size2 = "h1",
  size3 = "h2",
  size4 = "h3",
  size5 = "h4",
  size6 = "h5",
  size7 = "h6",
}

type TitleProps = {
  size?: Sizes;
  children: ReactNode;
  className?: string;
};

function Title({ className, size = "size1", children }: TitleProps) {
  return createElement(
    TagPerSize[size],
    { className: compose(variants[size], className) },
    children
  );
}

export default Title;
