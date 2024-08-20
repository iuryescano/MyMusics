import { Container } from './styles';

export function Button({ title, icon: icon, width, bgColor, textColor, loading = false, ...rest }) {
  return (
    <Container 
      type='button' 
      disabled={loading} 
      width={width} 
      $bgcolor={bgColor} 
      $textcolor={textColor} 
      {...rest}
    >
      {icon && <icon size={20} />} {/* Renderiza o ícone se existir */}
      {loading ? 'Carregando...' : title}
    </Container>
  );
}