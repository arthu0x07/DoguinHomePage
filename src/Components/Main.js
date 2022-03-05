import styled from "styled-components";

import fotodog1 from "../Assets/images/fotoDog1.png";

const Container = styled.main`
  width: 100%;
  max-width: 1600px;
  background-color: var(--background-gray);
  margin: 0 auto;
  min-height: 500px;

  h1 {
    font-size: 5.7rem;
    font-family: "Salsa";

    text-transform: capitalize;
    color: #9d9d9d;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #2b292c;

    @media (max-width: 1340px) {
      font-size: 4rem;
    }

    @media (max-width: 500px) {
      font-size: 2.8rem;
      padding: 0 20px;
    }
  }

  div {
    margin-top: 10rem;
    position: relative;
    width: 100%;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 800px;
      height: auto;
      filter: contrast(1.1);

      @media (max-width: 1340px) {
        width: 600px;
      }

      @media (max-width: 1024px) {
        width: 452px;
        margin-left: 8%;
      }

      @media (max-width: 620px) {
        width: 430px;
      }
    }

    p {
      font-size: 6rem;
      font-family: Salsa;
      padding-bottom: 4rem;
      width: 80%;
      align-self: center;
      position: relative;
      right: 50px;

      @media (max-width: 1340px) {
        font-size: 4rem;
        width: 700px;
      }

      @media (max-width: 1024px) {
        font-size: 3rem;
      }

      @media (max-width: 768px) {
        right: unset;
        text-align: center;
        padding-bottom: 7rem;
        padding-top: 2rem;
        padding-left: 1rem;
      }

      @media (max-width: 620px) {
        font-size: 2.3rem;
        width: 100%;
      }
    }

    a {
      font-family: "Luckiest Guy";
      color: #f5f3f3;
      padding: 1rem 3rem;
      font-size: 3.4rem;
      text-decoration: none;
      background-color: #85b948;

      position: absolute;
      right: 5%;
      bottom: 10%;
      z-index: 2;

      border-radius: 7px;

      animation: float 1.2s infinite alternate ease,
        pulse 1.4s infinite alternate;
      transition: background-color 2s ease;

      :hover {
        background-color: #383737;
      }

      @media (max-width: 1024px) {
        font-size: 2.4rem;
      }

      @media (max-width: 768px) {
        position: unset;
      }
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 123, 0.7);
    }

    50% {
      box-shadow: 0 0 0 13.2px rgba(0, 0, 123, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 32, 123, 0);
    }
  }

  // Conflito -> duas animações usando transofmr...

  @keyframes float {
    from {
      transform: translateY(-40px);
    }

    to {
      transform: translateY(40px);
    }
  }
`;

export function Main() {
  return (
    <Container>
      <h1>Ajude-nos a salvar vidas</h1>
      <div>
        <img src={fotodog1} alt="Foto de um pastor alemão caramelo" />
        <p>Adote seu cachorro programador agora!</p>
        <a href="">Adote já</a>
      </div>
    </Container>
  );
}
