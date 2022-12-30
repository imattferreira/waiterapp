import Button from "../../components/Button";
import Input from "../../components/Input";
import { container, wrapper } from "./styles.css";

function LoginPage() {
  return (
    <div className={container}>
      <main className={wrapper}>
        <p>Bem-vindo(a) ao</p>
        <h1>
          <span>WAITER</span>
          <span>APP</span>
        </h1>
        <form>
          <Input label="E-mail" name="email" placeholder="usuario@email.com" />
          <Input
            label="Senha"
            name="password"
            placeholder="Informe sua senha"
            type="password"
          />
          <Button type="submit" disabled>
            Fazer Login
          </Button>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
