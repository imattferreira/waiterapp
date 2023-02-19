import { container, hero, loginBtn, text, title } from "./styles.css";
import heroImg from "../../assets/images/hero.svg";
import Link from "../../components/link";

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
