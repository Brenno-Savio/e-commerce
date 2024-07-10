import styled from 'styled-components';

const NavbarStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  width: 100vw;
  height: 12.5vh;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.quartenary};

  .search-container:focus-within {
    outline: none;
    border-radius: 12px;
    box-shadow: 0 0 0 2px ${(props) => props.theme.quartenaryAlt};
    z-index: -1;
    display: flex;
  }
`;

export default NavbarStyled;
