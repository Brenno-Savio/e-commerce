import { useGlobalState } from '@/context/globalProvider';
import SubNavbarStyled from './SubNavbarStyled';

const SubNavbar = () => {
  const { theme } = useGlobalState();

  return <SubNavbarStyled theme={theme}>test1</SubNavbarStyled>;
};

export default SubNavbar;
