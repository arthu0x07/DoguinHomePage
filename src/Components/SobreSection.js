import react from "react";
import styled from "styled-components";

import RationImage from "../Assets/images/racao.png";
import DogBone from "../Assets/images/Osso.png";

const Container = styled.section`
  width: 100%;
  max-width: 1600px;
  background-color: var(--background-gray);
  margin: 0 auto;
  min-height: 500px;
  padding-top: 20rem;

  h2 {
    font-family: "Saira";
    font-size: 4.81rem;
    color: #737373;

    padding: 0rem 8rem;
  }

  div {
    padding-top: 8rem;
    padding-bottom: 20rem;

    width: 900px;
    margin: 0 auto;
    text-align: center;
    font-family: "Salsa";
    font-size: 3.7rem;
    color: #8d8d8d;
    position: relative;

    .BoneImage {
      position: absolute;
      top: -29%;
      left: 37%;
      z-index: 0;
    }

    p {
      position: relative;
      background-color: var(--background-gray);
      z-index: 3;
      padding: 0 9rem;
    }

    .RationImage {
      position: absolute;
      top: 60%;
      left: 100%;
      z-index: 0;
    }
  }
`;

export function SobreSection() {
  return (
    <>
      <Container>
        <h2>Quem somos?</h2>

        <div>
          <img
            className="BoneImage"
            src={DogBone}
            alt="Imagem de osso de cachorro"
          />

          <p>
            Nós fazemos a conexão entre quem deseja adotar um pet com uma rede
            de mais de 104 ONGs e protetores parceiros. Funciona assim: a Petz
            disponibiliza espaços especialmente dedicados para a adoção no
            centro de suas lojas e as ONGs/protetores parceiros ficam
            responsáveis pelo processo e entrevista com os potenciais adotantes.
            Juntos somos mais fortes!
          </p>

          <img
            className="RationImage"
            src={RationImage}
            alt="Imagem de ração de cachorro"
          ></img>
        </div>
      </Container>
    </>
  );
}
