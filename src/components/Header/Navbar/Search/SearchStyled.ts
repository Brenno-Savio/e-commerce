import styled from 'styled-components';

const SearchStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 48px;
    width: 100%;
    padding-left: 8px;
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.textPrimary};
  }

  input:focus,
  select:focus,
  button:focus {
    outline: none;
  }
`;

export default SearchStyled;
