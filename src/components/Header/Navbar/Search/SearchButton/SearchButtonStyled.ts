import styled from 'styled-components';

const SearchButtonStyled = styled.button`
  background-color: ${(props) => props.theme.bgSecondary};
  color: ${(props) => props.theme.quartenary};
  height: 48px;
  width: 48px;
  padding: 5px;
  border-radius: 0 12px 12px 0;
  text-align: center;
  justify-content: center;
  font-size: 28px;

  :hover {
    color: ${(props) => props.theme.quartenaryAlt};
    transition: 2ms ease-in-out;
  }
`;

export default SearchButtonStyled;
