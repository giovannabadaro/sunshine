import { HeaderStyled, Hamburguer, Nav } from "./styles";
import LogoFull from "../../assets/images/logo-full.svg";
import IconHamburguer from "../../assets/images/hamburguer.svg";
const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <LogoFull />
        <Hamburguer>
          <IconHamburguer />
        </Hamburguer>
        <Nav>
          <ul>
            <li>home</li>
            <li>pricing</li>
            <li>log in</li>
            <li>log in</li>
          </ul>
        </Nav>
      </div>
    </HeaderStyled>
  );
};

export { Header };
