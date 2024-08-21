import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom';


export function Header(){
    return (
        <Container>
            <div className="text">
            
                <h1>MyMovies</h1>
            </div>
            <div className="Input">
                <input type="text" placeholder="Pesquisar pelo titulo" className="Search"/>
            </div>
            <Profile>
                <div>
                    <strong>Iury Escano</strong>
                    <Link to="/">
                        Sair
                    </Link>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/iuryescano.png" alt="User Photo"/>
                </Link>
            </Profile>
        </Container>
    )
}