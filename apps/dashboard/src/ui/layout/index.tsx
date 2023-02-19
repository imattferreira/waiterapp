import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/ui/components/header";
import Sidebar from "@/ui/components/sidebar";

import { container } from "./styles.css";

type LayoutProps = {
  children: ReactNode;
};

const pathsThatLayoutShouldNotBeRendered = ["/", "/signin"];

function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  if (pathsThatLayoutShouldNotBeRendered.includes(pathname)) {
    return <>{children}</>;
  }

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
