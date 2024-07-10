'use client';

import { useGlobalState } from '@/context/globalProvider';
import { SelectOptions } from '@/types';
import { ChangeEvent } from 'react';
import CustomSelectStyled from './CustomSelectStyled';

interface Props {
  options: SelectOptions[];
  selectOption: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const CustomSelect = ({ options, selectOption, value }: Props) => {
  const { theme } = useGlobalState();

  return (
    <CustomSelectStyled
      value={value}
      onChange={selectOption}
      theme={theme}
      className="hover:text-white focus:text-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.title}>
          {option.title}
        </option>
      ))}
    </CustomSelectStyled>
  );
};

export default CustomSelect;
