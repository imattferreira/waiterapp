import heroImg from "@/ui/assets/images/hero.svg";
import Link from "@/ui/components/link";

import { container, hero, loginBtn, text, title } from "./styles.css";

function HomePage() {
  return (
    <main className={container}>
      <img src={heroImg} alt="" className={hero} />
      <h1>
        <span className={title}>WAITER</span>
        <span className={title}>APP</span>
      </h1>
      <p className={text}>O App do Garçom</p>
      <Link to="/signin" className={loginBtn}>
        Entrar
      </Link>
    </main>
  );
}

export default HomePage;
