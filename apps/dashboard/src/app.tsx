import { useEffect } from "react";

import Router from "@/app/router";
import Layout from "@/ui/layout";
import { themeClass } from "@/ui/styles/theme.css";

function App() {
  useEffect(() => {
    const root = document.querySelector("body");

    root?.setAttribute("class", themeClass);
  }, []);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
