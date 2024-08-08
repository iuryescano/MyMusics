import { Container, Profile } from "./styles";


export function Header(){
    return (
        <Container>
            <div className="text">
                <h1>RocketMovies</h1>
            </div>
            <div className="Input">
                <input type="text" placeholder="Pesquisar pelo titulo" className="Search"/>
            </div>
            <Profile>
                <div>
                    <strong>Iury Escano</strong>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/iuryescano.png" alt="User Photo"/>
            </Profile>
        </Container>
    )
}