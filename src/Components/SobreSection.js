import React from "react";
import styled from "styled-components";

import RationImage from "../Assets/images/racao.png";
import DogBone from "../Assets/images/Osso.png";

const Container = styled.section`
  width: 100%;
  max-width: 1600px;
  background-color: var(--background-gray);
  margin: 0 auto;
  min-height: 500px;
  padding-top: 10rem;

  h2 {
    font-family: "Saira";
    font-size: 4.81rem;
    color: #737373;

    padding: 0rem 8rem;

    @media (max-width: 1024px) {
      padding: 0rem 3rem;
    }

    @media (max-width: 768px) {
      z-index: 2;
      position: relative;
    }

    @media (max-width: 620px) {
      font-size: 3.81rem;
    }

    @media (max-width: 500px) {
      font-size: 2.81rem;
      padding: 0rem 2rem;
    }
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

    @media (max-width: 1024px) {
      width: 800px;
    }

    @media (max-width: 768px) {
      width: unset;
      font-size: 3rem;
    }

    @media (max-width: 500px) {
      padding-top: 4rem;
      padding-bottom: 12rem;
    }

    .BoneImage {
      position: absolute;
      top: -29%;
      left: 37%;
      z-index: 0;

      @media (max-width: 1024px) {
        top: -21%;
      }

      @media (max-width: 620px) {
        top: -21%;
        left: 8%;
      }

      @media (max-width: 400px) {
        width: 374px;
        top: -18%;
        left: 18%;
      }
    }

    p {
      position: relative;
      background-color: var(--background-gray);
      z-index: 3;
      padding: 0 9rem;

      @media (max-width: 1024px) {
        line-height: 55px;
        text-align: start;
      }

      @media (max-width: 768px) {
        padding: 0px 6rem;
        line-height: 50px;
        text-align: start;
      }

      @media (max-width: 620px) {
        font-size: 2.3rem;
        padding: 0px 2rem;
      }

      @media (max-width: 500px) {
        padding: 0px 1rem;
        font-size: 2rem;
        line-height: 46px;
      }
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
