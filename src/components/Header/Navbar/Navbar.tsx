import { useGlobalState } from '@/context/globalProvider';
import Image from 'next/image';
import Link from 'next/link';
import NavbarStyled from './NavbarStyled';
import NavLinks from './NavLinks/NavLinks';
import Search from './Search/Search';

const Navbar = () => {
  const { theme } = useGlobalState();

  return <NavbarStyled theme={theme}>
    <div>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt='logo-ecommerce' width={200} height={200}  />
      </Link>
    </div>
    <div>
      <Search />
    </div>
    <div>
      <NavLinks />
    </div>
  </NavbarStyled>;
};

export default Navbar;
