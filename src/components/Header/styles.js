import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  padding: 1rem;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

const Hamburguer = styled.button`
  background-color: transparent;
  border: none;
`;

const Nav = styled.nav`
  position: absolute;
  top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  ul {
    margin: 0 auto;
    li {
      padding-top: 1rem;
      list-style: none;
    }
  }
`;

export { HeaderStyled, Hamburguer, Nav };
