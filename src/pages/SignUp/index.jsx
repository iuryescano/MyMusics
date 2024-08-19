import { Container, Form, Background } from "./styles";
import { FiUser,FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { BiArrowBack } from "react-icons/bi";


export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>MyMusics</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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

        <Button title={"Cadastrar"} width= {"19rem"}/>

        <a href="#">
          <BiArrowBack/>
          Voltar para o login
        </a>
        
        
      </Form>

      <Background/>
    </Container>
  );
}