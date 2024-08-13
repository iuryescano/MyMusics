import { Container } from "./styles";

export function Card({ title, text }) {
    return (
        <Container href="https://github.com/iuryescano">
            <h3>{title}</h3>
            <p>{text}</p>
        </Container>
    );
}