import { useState } from 'react';
import { MdOutlineLightMode, MdOutlineNightlightRound } from 'react-icons/md';
import ButtonModeStyled from './ButtonModeStyled';

const ButtonMode = () => {
  const [isDarkMode] = useState(false);

  return isDarkMode ? (
    <ButtonModeStyled>
      <MdOutlineNightlightRound />
    </ButtonModeStyled>
  ) : (
    <ButtonModeStyled>
      <MdOutlineLightMode />
    </ButtonModeStyled>
  );
};

export default ButtonMode;
