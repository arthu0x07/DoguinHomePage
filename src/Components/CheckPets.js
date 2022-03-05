import React, { useState } from "react";
import styled from "styled-components";

import ImageButton from "../Assets/images/ImageButton.png";
import ImagemDog from "../Assets/images/ImagemCachorroJair.png";

import { PetList } from "../utils/petlist";

const Container = styled.section`
  width: 100%;
  max-width: 1600px;
  background-color: #e0842f;
  margin: 0 auto;
  min-height: 500px;
  padding-top: 20rem;
  padding-bottom: 20rem;

  @media (max-width: 648px) {
    padding-top: 10rem;

  }

  h2 {
    font-family: "Saira";
    font-size: 4.81rem;
    color: #f2f2f2;

    padding: 0rem 8rem;

    @media (max-width: 648px) {
      text-align: center;
      font-size: 8vw;
    }
  }

  .Container-ButtonSearch {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;

    img {
      border: 0px solid;
      border-color: #f2f2f2;
      border-radius: 50%;
      border-width: 0px;
      width: 240px;
      background-color: #212020;

      transition: border-width 0.3s linear, border-color 0.3s linear;

      :hover {
        border-width: 10px;
        border-color: #85b948;
      }
    }
  }

  .Container-Animals {
    margin-top: 15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;
  }

  .CardAnimal {
    cursor: pointer;
    border: 5px solid #f2f2f2;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 260px;
    background-color: #212020;

    margin: 20px;

    transition: border 0.3s linear;

    :hover {
      border: 5px solid #212020;
    }

    img {
      width: 250px;
      height: 300px;
      object-fit: cover;
    }

    h3 {
      font-size: 2.2rem;
      color: #f2f2f2;
      font-family: "Saira";
      padding: 1rem 1rem 1rem 2rem;
    }

    p {
      font-size: 1.5rem;
      color: #f2f2f2;
      font-family: "Saira";
      padding: 1rem 1rem 1rem 2rem;
    }
  }

  // Adicionar efeito de pulse no botão após clicar --> Abrir o item de carregamento...
`;

export function CheckPets() {
  const [petList, setPetList] = useState([]);

  function handleSetPetLists() {
    setPetList(PetList);
  }

  return (
    <Container>
      <h2>Confira nossos pets</h2>

      <div
        onClick={() => {
          handleSetPetLists();
        }}
        className="Container-ButtonSearch"
      >
        <img
          src={ImageButton}
          alt="Imagem de um botão arredondado com um desenho de gato e cachorro"
        />
      </div>

      <section className="Container-Animals">
        {petList.lenght != 0 &&
          petList.map((pet, index) => {
            return (
              <div className="CardAnimal" id={`pet-${index}`}>
                <img src={pet.image} />

                <h3>{pet.name}</h3>
                <p>{pet.occupation}</p>
              </div>
            );
          })}
      </section>
    </Container>
  );
}
