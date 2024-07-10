import styled from 'styled-components';

const CustomSelectStyled = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 48px;
  padding: 0 16px;
  outline: none;
  border-radius: 12px 0 0 12px;

  cursor: pointer;

  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.bgSecondary};

  @media (max-width: 768px) {
    width: 10px;
  }
`;

export default CustomSelectStyled;
