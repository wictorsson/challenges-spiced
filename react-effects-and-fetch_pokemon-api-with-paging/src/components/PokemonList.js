import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([0]);
  const [prevDataExist, setprevDataExist] = useState(false);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
        setprevDataExist(data.previous !== null);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function handleNextClick() {
    return setPage(page + 21);
  }

  function handlePrevClick() {
    return setPage(page - 21);
  }

  return (
    <main>
      {prevDataExist ? (
        <button type="button" onClick={handlePrevClick}>
          Previous Page
        </button>
      ) : null}

      <button type="button" onClick={handleNextClick}>
        Next Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
