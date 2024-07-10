import Link from 'next/link';
import { TiShoppingCart } from 'react-icons/ti';
import ShopcartStyled from './ShopcartStyled';

const Shopcart = () => {
  return (
    <ShopcartStyled>
      <Link href={'/'}>
        <TiShoppingCart />
        <span>Shopcart</span>
      </Link>
    </ShopcartStyled>
  );
};

export default Shopcart;
