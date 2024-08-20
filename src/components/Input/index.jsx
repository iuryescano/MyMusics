import { Container } from './styles';

export function Input({ icon: Icon, height, ...rest }) {
  return (
    <Container height={height}>
      {Icon && <Icon size={20} />}
      <textarea {...rest} />
    </Container>
  );
}