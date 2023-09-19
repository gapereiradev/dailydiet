import { Container, Logo, Avatar } from './styles';
import { Text, View } from 'react-native';
import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

type Props ={
  showBackButton: boolean;
}
export function Header({showBackButton}:Props) {

  return (
    <Container>
      
      <Logo source={logoImg}/><Avatar source={avatarImg}/> 
    </Container>
  );
}