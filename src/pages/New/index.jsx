import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { MusicItem } from '../../components/MusicItem';


import { Container, Form, Wrapper, Box, Box2 } from './styles';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Novo Filme</h1>
                    </header>
                    <Wrapper>
                        
                        <Box>
                            <Input
                            placeholder="Título"
                            type="text"
                            />

                            <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            />
                        </Box>

                        <Box2>
                            <Input
                            placeholder="Observações"
                            type="text"
                            height="24rem"
                            />
                        </Box2>

                    </Wrapper>
                    <Section title={"Marcadores"}>
                        <div className='marcadores'>
                            <div className='tags'>
                                <MusicItem value="React"/>
                                <MusicItem isNew placeholder="Novo Marcador"/>
                            </div>
                        </div>
                    </Section>
                    <div className='button'>
                        <Button title={"Excluir Filme"} width={"45%"} textColor={"#FF859B"} bgColor={"Black"}></Button>
                        <Button title={"Salvar Alterações"} width={"45%"}></Button>
                    </div>
                    
                </Form>
                
            </main>
        </Container>
    );
}