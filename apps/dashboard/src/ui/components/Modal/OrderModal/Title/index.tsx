// TODO create global <Title />

import { ReactNode } from "react";
import { container } from "./styles.css";

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps) {
  return <h4 className={container}>{children}</h4>;
}

export default Title;
