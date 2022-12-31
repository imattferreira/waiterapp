import { useEffect } from "react";
import Router from "./app/Router";
import Layout from "./ui/Layout";
import { themeClass } from "./ui/styles/theme.css";

function App() {
  useEffect(() => {
    const root = document.getElementById('root');

    root?.setAttribute('class', themeClass);
  }, []);


  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
