import { Container } from './styles';

export function Tag({ title, bgColor }) {
    return (
        <Container bgColor={bgColor}>
            {title}
        </Container>
    );
}