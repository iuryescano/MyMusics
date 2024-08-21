import { Container } from './styles';

export function Input({ icon: Icon, height, isTextarea, ...rest }) {
  return (
    <Container height={height}>
      {Icon && <Icon size={20} />}
      {isTextarea ? <textarea {...rest} /> : <input {...rest} />}
    </Container>
  );
}