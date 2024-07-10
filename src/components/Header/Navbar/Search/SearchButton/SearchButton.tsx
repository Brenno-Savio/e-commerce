import { useGlobalState } from '@/context/globalProvider';
import { IoSearchSharp } from 'react-icons/io5';
import SearchButtonStyled from './SearchButtonStyled';

const SearchButton = () => {
  const { theme } = useGlobalState();

  return (
    <SearchButtonStyled theme={theme}>
      <IoSearchSharp />
    </SearchButtonStyled>
  );
};

export default SearchButton;
