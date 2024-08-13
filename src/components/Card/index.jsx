import { Container } from "./styles";
import { StarRating } from '../../components/StarRating';

export function Card({ title, text }) {
    const currentRating = 4;
    return (
        <Container href="https://github.com/iuryescano">
            <h3>{title}</h3>
            <StarRating rating={currentRating} />
            <p>{text}</p>
            
        </Container>
    );
}