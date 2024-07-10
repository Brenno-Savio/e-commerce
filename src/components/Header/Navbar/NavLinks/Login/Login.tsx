import Link from 'next/link';
import { BiLogIn } from 'react-icons/bi';
import LoginStyled from './LoginStyled';

const Login = () => {
  return (
    <LoginStyled>
      <Link href={'/'}>
        <BiLogIn />
        <span>Login</span>
      </Link>
    </LoginStyled>
  );
};

export default Login;
