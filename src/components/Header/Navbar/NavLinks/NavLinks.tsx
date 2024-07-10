import { useGlobalState } from '@/context/globalProvider';
import ButtonMode from './ButtonMode/ButtonMode';
import Login from './Login/Login';
import NavLinksStyled from './NavLinksStyled';
import Shopcart from './Shopcart/Shopcart';

const NavLinks = () => {
  const { theme } = useGlobalState();

  return (
    <NavLinksStyled theme={theme}>
      <ButtonMode />
      <Login />
      <Shopcart />
    </NavLinksStyled>
  );
};

export default NavLinks;
