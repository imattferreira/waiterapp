import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { container } from "./styles.css";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className={container}>
        <Header />
        {children}
      </div>
    </>
  );
}

export default Layout;
