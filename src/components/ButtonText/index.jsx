import { Container } from './styles';

export function ButtonText({ title, icon: Icon, ...rest }) {
    return (
        <Container 
            type="button"
            {...rest}
        >
            {Icon && <Icon size={20} />} {/* Renderiza o ícone se existir */}
            {title}
        </Container>
    );
}