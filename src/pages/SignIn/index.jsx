import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";


export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>MyMusics</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title={"Entrar"} width= {"19rem"}/>

        <a href="#">
          Criar Conta
        </a>
      </Form>

      <Background/>
    </Container>
  );
}