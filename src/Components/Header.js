import styled from "styled-components";

import logopage from "../Assets/images/logopage.png";

const Container = styled.header`
  width: 100%;
  max-width: 1600px;
  background-color: #85b948;
  margin: 0 auto;

  padding: 4rem 2rem;

  > div {
    width: 100px;

    img {
      width: 70%;
      height: 100%;
    }
  }
`;

export function Header() {
  return (
    <Container>
      <div>
        <img src={logopage} alt="Imagem de gatos como o logo da página."></img>
      </div>
    </Container>
  );
}
