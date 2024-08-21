import { Container } from './styles';

export function Button({ title, icon: Icon, width, bgColor, textColor, loading = false, ...rest }) {
  return (
    <Container 
      type='button' 
      disabled={loading} 
      width={width} 
      $bgcolor={bgColor} 
      $textcolor={textColor} 
      {...rest}
    >
      {Icon && <Icon size={20} />} {/* Renderiza o ícone se existir */}
      {loading ? 'Carregando...' : title}
    </Container>
  );
}