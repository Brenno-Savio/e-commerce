import { useGlobalState } from '@/context/globalProvider';
import selectOptions from '@/data/selectOptions';
import { SelectOptions } from '@/types';
import { ChangeEvent, useState } from 'react';
import CustomSelect from './CustomSelect/CustomSelect';
import SearchButton from './SearchButton/SearchButton';
import SearchStyled from './SearchStyled';

const Search = () => {
  const { theme } = useGlobalState();

  const [selectedOption, setSelectedOption] = useState<SelectOptions>(
    selectOptions[0],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let newOption = selectOptions.find(
      (option) => option.title === event.target.value,
    );
    setSelectedOption(newOption as SelectOptions);
  };

  return (
    <SearchStyled theme={theme} className='search-container'>
      <CustomSelect
        options={selectOptions}
        selectOption={handleChange}
        value={selectedOption.title}
      />
      <input type="text" />
      <SearchButton />
    </SearchStyled>
  );
};

export default Search;
