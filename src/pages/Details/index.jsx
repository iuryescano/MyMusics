import { Container, Links } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { CgMathPlus } from "react-icons/cg";


export function Details() {
  return (
    <Container>
      <Header />
      <div className="topo">
        <h1>Meus filmes</h1>
        <Button title="Adicionar Filme" width="207px" icon={CgMathPlus}/>
      </div>

      <div className="content">
        <Links>
          <li><Card title="Interestellar" text="TETSEE" /></li>
          <li><Card title="Interestellar" text="texto testing2" /></li>
          <li><Card title="Interestellar" text="texto testing3" /></li>
        </Links>
      </div>
    </Container>
  );
}