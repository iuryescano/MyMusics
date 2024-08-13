import { Container, Links } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Details() {
  return(
    <Container>
      <Header/>

        <div>
          <h1> Meus filmes</h1>
          <Button title="Entrar"/>
        </div>

      <Links>
          <li><Card title="Interestellar" text="Loren"/></li>
          <li><Card title="Interestellar" text="texto testing2"/></li>
          <li><Card title="Interestellar" text="texto testing3"/></li>
      </Links>

    </Container>
  )
}