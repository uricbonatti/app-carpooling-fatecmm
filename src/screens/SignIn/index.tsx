import { Container, Slogan, Title } from './styles';
import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Caronas Fatec</Title>
      <Slogan>Dinamizando suas caronas</Slogan>
      <Button title="Entrar com o Email Institucional" />
    </Container>
  );
}
